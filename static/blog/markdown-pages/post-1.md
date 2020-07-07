---
path: /blog/How-I-Built-This-Site
date: 2020-03-02T05:00:00.000Z
title: How I Built This Site
image: manley-portfolio/src/images/gatsbyNetlify.png
---
This site is built using using [Gatsby](https://www.gatsbyjs.org/), a static site generator, and connected to [Netlify](https://www.netlifycms.org/), a Content Management System.

## Why Gatsby?
Gatsby combines React, GraphQL, and WebPack to automatically build and optimize a website. Gatsby is connected to github, and can be set to trigger a redeploy whenever changes are pushed to its branch. This allows for continuous integration, and drastically simplified the deploy process.

## Why Netlify?
Netlify serves a dual purpose of hosting this site and being the CMS. Blog posts are written in Markdown. All changes are commited to this site's github repo, which then triggers Gatsby to rebuild the site. New blog posts can be published in a matter of seconds!

#### See the repo for my site on [github](https://github.com/manleyac/manley-portfolio)

