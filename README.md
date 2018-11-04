# Hashtag Wall Client

[![dependencies](https://david-dm.org/Krisseck/Hashtag-Wall-Client.svg)](https://david-dm.org/Krisseck/Hashtag-Wall-Client)  [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/Krisseck/Hashtag-Wall-Client/issues)

[![Hashtag Wall Client Example](https://github.com/Krisseck/Hashtag-Wall-Client/blob/master/hashtag-wall-example.jpg)](http://hashtag.polso.info)

A website that displays posts from several social media sources. Automatically updates the feed with set intervals. Uses [Hashtag-Wall-Server](https://github.com/Krisseck/Hashtag-Wall-Server) to fetch the data.

This is the client component of the wall. NOTE: This website is only an example, you are free to develop your own client! The client just needs to get the JSON api data from the server component.

## Demo

Client: http://hashtag.polso.info

API: http://hashtag.polso.info:8080/posts

Admin: http://hashtag.polso.info:8080/admin (username: admin, password: password)

## Features

* Displays posts from the JSON API
* Updates the feed automatically in intervals

## Requirements (for building and customizing only)

* Tested with **Node.js v10.13.0 (LTS)**, should work with other 10.x versions aswell.
* [Yarn](https://yarnpkg.com/)
* The default theme has been built for 1080p (1920x1080) display, but should also work in other resolutions


## Install

### If you just want to display website and do no customization:

`dist` folder has all the files you need. Just copy that to your web server and edit `config.js` file for API endpoint URL, hashtag, etc.

### To build and customize

Run `yarn`to install dependencies

**CSS**

This project uses SASS for theming, the source can be found in `src/sass`

**Building**

Webpack is used for building the site.

`yarn dev` = Starts a live-reload dev server that watches the source materials in `src` folder.

`yarn build` = Builds the website to the `dist` folder

## Hosting

Need help with the project or looking for hosting? Contact me at kristian@polso.info
