const slugify = str => {
  const slug = str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // convert spaces to hyphens "-"
    .replace(/(^-|-$)+/g, "") // replace any trailing hyphens with an empty string.
  return `/${basePath}/${slug}`.replace(/\/\/+/g, "/") // remove any extra "/" from path
  // checks for any sequence of 2 or more "/" in a row.
}

module.exports = ({ contentPath = `data`, basePath = `/`, }) => ({
  // any options provided by the theme are provided as arguments to this function
  // -- allowing us to dynamically pass in values to our theme's gatsby-config and/or gatsby-node:
  plugins:
    [
      {
        resolve: "gatsby-source-filesystem",
        options: {
          path: contentPath,
        },
      },
      {
        resolve: "gatsby-transformer-yaml",
        options: {
          typeName: "Event",
          // basePath: "/events",
        },
      },
    ],
})


