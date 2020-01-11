🚨🚧🏗

# WIP -- Under Development

This is theme abstracts the gatsby-default-starter to a theme



# SETUP

Add theme to workspace, or clone into workspace:

```text
.
├── README.md
├── gatsby-theme-defaults
├── gatsby-theme-[your-new-themename]
├── node_modules
├── package.json
├── [consuming-site-name]
└── yarn.lock
```

> ensure that the theme and consuming site are adjacent to each other in the project root. 

Update the theme name in [your-new-theme]'s `package.json` :

```json
{
  "name": "site",
}
```

> **NOTE**: ensure that the private setting not defined also - this allows us to publicly distribute our theme via npm if need be...



Also in  [your-new-theme]'s `package.json` :

```json
"dependencies": {
    "gatsby": "^2.18.18",
   	// "gatsby-theme-default-starter": "*",
    "gatsby-theme-[your-new-theme]": "*",
    "react": "^16.12.0",
    "react-dom": "^16.12.0"
  }
```

> This list's our theme as a dependency for our site to consume, you can also remove the "gatsby-theme-default-starter" from the list as well.
>
> **NOTE**: (`"*"`) - indicates to look for the latest version, this is a hack that allows us to use dependencies stored locally in a similar manner to how npm dependencies are actually used. 





## Configure Consuming SIte:

`~/[consuming-site-name]/package.json`

> **NOTE**: please replace all instances of [consuming-site] with your actual site name, as it appears in 
>
>  `package.json`:
>
> ```json
> {
>   "private": true,
>   "name": "consuming-site",
> }
> ```
>
> **ALSO NOTE**: your new theme is a dependency of this site, so we can either manually add it as a dependency or we can add it via the command-line, both methods are listed below.
>
> [Add Theme To Workspace Manually](#manual-method)	[Add Theme To Workspace Via CommandLine](#cli-method)



`~/[consuming-site-name]/gatsby-config.js`:

```js
module.exports = {
  siteMetadata: {
    title: `Gatsby Themes Consumer`,
    description: `Testing consumption of multiple gatsby themes`,
    author: `@gs`,
  },
  plugins: [
    `gatsby-theme-default-starter`,
    `gatsby-theme-[your-new-theme]`,
  ]
}
```

This ensure that your consuming site will utilize your theme as a plugin to build with.



## Configure Workspace

Once our consuming theme, site and workspace settings are configured properly, connect our theme and workspace 

In the project root -- next to both the theme and the site, should be your project's package.json, if you don't have one defined, you can edit the one below:

`~/package.json`:

```json
{
  "private": true,
  "workspaces": [
    "gatsby-theme-default-starter",
    "gatsby-theme-[your-new-theme]",
    "site"
  ]
}

```

> this sets up and configures the overall workspace with your, notice there is nothing else in this file. Also make sure that this workspace is also set to private. ONLY the theme should be left public and that's really only if you're intending on publishing it.

- Once the workspaces are defined, we can add our theme to our site's workspace, there are two methods below:

  [Add Theme To Workspace Manually](#manual-method)	[Add Theme To Workspace Via CommandLine](#cli-method)





### <a name="manual-method"> Add theme to workspace Via Manual Approach</a>

Ensure that your theme is listed as a dependency for your site to build with, 

`~/[consuming-site-name]/package.json`

```json
"dependencies": {
    "gatsby": "^2.18.18",
    "gatsby-theme-[your-new-theme]": "*",  
    "react": "^16.12.0",
    "react-dom": "^16.12.0"
  }
```

>  💡
>
> this allows us to bypass issues that may occur with yarn.lock errors, --- if you do see such erorrs, remove the yarn.lock file in the project root and try again. 

Now Run `Yarn` in the project root to install both dependencies for the theme and the site, and configure the workspace

```shell
yarn
```

> When the install finishes you can start your site in development by running:
>
> ```shell
> yarn workspace [consuming-site-name] develop
> ```
>
> This will install all dependencies including all related peer dependencies. 





### <a name="cli-method">Add theme to workspace Via Command Line</a>

Ensure that your theme is listed as a dependency for your site to build with, 

```shell
  yarn workspace [consuming-site] add "gatsby-theme-[your-new-theme]@*"
```

> When the install finishes you can start your site in development by running:
>
> ```shell
> yarn workspace [consuming-site-name] develop
> ```
>
> This will install all dependencies including all related peer dependencies. 

