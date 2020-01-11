🚨🚧🏗

# WIP -- Under Development

-- to install run:

```shell
  yarn workspace [consuming-site-name] add "gatsby-theme-yaml-data@*"
```
An index page might not be loaded if your site doesn't already implement one,
instead goto: localhost:8000/list -- which is where the event example list renders.
- this can be configured in the theme's gatsby-node, in createPages by updating listPath

> - **NOTE**: createPages doesn't seem to take an options object (`verify`)
> - [reference: gatsby-node api](https://www.gatsbyjs.org/docs/node-apis/#createPages)

This theme will create an entry for each 'event' found in `site/data/*.yml`

> **NOTE**:  this theme must be passed a config option from the consuming-site:
>
> `site/gatsby-config.js`:
>
> ```js
> {
>   resolve: `gatsby-theme-yaml-data`,
>     options: {
>       // allows ability to set options for the theme -- defined by the theme
>       contentPath: 'data', // sets the value for our contentPath
>         basePath: '/events' // sets the value for the events path
>       // based on our theme settings, this will create the events folder if it does not exist,
>       // -- as per our config.
>  }
> ```
>
> `contentPath`, must be provided to options in order for theme to run without error, `basePath` will create an `/events` directory if one doesn't exist, and is used to set a base url path for our events.


## Setup


```json
{
  "private": true,
  "workspaces": [
    "gatsby-theme-yaml-data",
    "site"
  ]
}

```

~/site/package.json:
```json
  "dependencies": {
    "gatsby-theme-yaml-data": "*",
  }
```

~/site/gatsby-config.js

```js
module.exports = {
  plugins: [`gatsby-theme-yaml-data`]
}
```

Run yarn to ensure the packages' relationships are set properly.
```shell
yarn
```

To consume the theme:
```shell
  yarn workspace site develop
```

Alternatively you could update the theme using:
```shell
  yarn workspace gatsby-theme-yaml-data develop
```
