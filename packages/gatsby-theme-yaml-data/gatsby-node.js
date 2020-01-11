const fs = require("fs")

// Make sure the data directory exists --
// -- in gatsby-config, we've told gatsby to expect a data directory.
// -- if that directory doesn't exist gatsby will throw an error

// 🏗 refactors to add options, which are provided as the 2nd arg onPreBoostrap
// -- updates onPreBootstrap && createResolvers &&  to take options
exports.onPreBootstrap = ({ reporter }, options) => {
  // use options value to set contentPath / or default to 'data'
  const contentPath = options.contentPath || "data"

  if (!fs.existsSync(contentPath)) {
    // create directory if it doesn't exist.
    reporter.info(`creating the ${contentPath} directory`)
    fs.mkdirSync(contentPath)
  }
}

// Define the "Event" type -- this makes sure that --
// -- if no events exist we get an empty array not an error
exports.sourceNodes = ({ actions }) => {
  // source nodes gives us access to actions,
  // -- which allows us to use createTypes
  // NOTE: @dontInfer -- tells gatsby not to imply any nodes
  // -- since we're defining our nodes explictly
  // NOTE: we use the @proxy directive to map the "snake_case" date to camelCase
  actions.createTypes(`
    type Event implements Node @dontInfer {
      id: ID!
      name: String!
      location: String!
      startDate: Date! @dateformat @proxy(from: "start_date")
      endDate: Date! @dateformat @proxy(from: "end_date")
      url: String!
      slug: String!
    }
  `)
}

// Define resolvers for custom fields (slug)
// -- our yaml content doesn't have an explict slug defined,
// -- so we'll use a resolver to create that slug for us from the "name" field

// 🏗 refactors to add options, which are provided as the 2nd arg:
exports.createResolvers = ({ createResolvers }, options) => {
  const basePath = options.basePath || "/events" // sets basePath from options or defaults to "/" root
  // Quick-and-dirty helper to convert strings into URL-friendly slugs.
  const slugify = str => {
    const slug = str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-") // convert spaces to hyphens "-"
      .replace(/(^-|-$)+/g, "") // replace any trailing hyphens with an empty string.
    return `/${basePath}/${slug}`.replace(/\/\/+/g, "/") // remove any extra "/" from path
    // checks for any sequence of 2 or more "/" in a row.
  }
  // create the actual resolver usins the helper function to slugify strings:
  createResolvers({
    Event: {
      slug: {
        resolve: source => slugify(source.name),
        // source = event node,
      },
    },
  })
}


// query for events and create pages
exports.createPages = async ({ actions, graphql, reporter }) => {
  const listPath = "/events"
  actions.createPage({
    path: listPath, // location to create the list page for all items found new page
    component: require.resolve("./src/templates/events.js"), // component to use to render page
  })
  // creates a query for individual events from the response of createPages:
  const result = await graphql(`
  query {
    allEvent(sort: { fields: startDate, order: ASC }) {
      nodes {
        id
        slug
      }
    }
  }
`)
  if (result.errors) {
    reporter.panic("error loading events", result.errors)
    // used to report any errors -- throws build-time error
    return
  }

  const events = result.data.allEvent.nodes // grab reference to all events

  events.forEach(event => {
    const slug = event.slug // pulls out slug from event

    actions.createPage({
      path: slug, // sets page path with slug
      component: require.resolve("./src/templates/event.js"), // defines component used to render
      context: {
        eventID: event.id, // passes in the id to context
        // -- used to target specific event ( to perform CRUD operations )
      },
    })
  })
}
