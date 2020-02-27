# PENNSTAR WEB SITE

Jammers Internal:
To preview visit repo settings and change deployed branch to "master"
[](https://github.com/jammersio/pennstar-website/settings)

## 👷‍♂️🚧🏗


```shell
yarn
```

To consume the theme run develop on site after configuration is updated:
```shell
  yarn workspace site develop
```

Alternatively you could edit any of the themes itself using:
```shell
  yarn workspace gatsby-theme-[theme-name] develop
```

🚨 **NOTE**: Any themes consuming options, can't be run as above, -- this is because they require options to be passed in from the [consuming-site]'s gatsby-config.
