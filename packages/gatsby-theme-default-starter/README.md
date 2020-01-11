🚨🚧🏗

# WIP -- Under Development


this theme is a port of the official gatsby default starter


🚨 **NOTE**: this theme requires the following file `[consuming-site]/src/images/icon.png`


## Setup

```json
{
  "private": true,
  "workspaces": [
    "gatsby-theme-default-starter",
    "site"
  ]
}

```

~/site/package.json:
```json
  "dependencies": {
    "gatsby-theme-default-starter": "*",
  }
```

~/site/gatsby-config.js

```js
module.exports = {
  plugins: [`gatsby-theme-default-starter`]
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
  yarn workspace gatsby-theme-default-starter develop
```
