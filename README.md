# Product Resources

Resources for current and aspiring product managers, organized by topic. Adding helpful resources and bookmarks as I come across them! [Contribution guidelines](https://github.com/melanierichards/product-resources/blob/main/CONTRIBUTING.md)

## Live Site

https://product.melanie-richards.com/

## Tech Stack

This site is built with:

* **[Eleventy](https://www.11ty.dev/):** static site generator
* **[Notion API](https://developers.notion.com/page/notion-platform-roadmap):** fetches a product resources database I have in my personal Notion environment.
* **[Netlify](https://netlify.com):** where this site is deployed to (disclaimer: my current employer!).

## Getting Started

Since I am using a private database, these instructions are probably most useful if you want to create a similar site, vs contribute to this one. If you have a content suggestion, feel free to [file an issue](https://github.com/melanierichards/product-resources/issues).

1. Fork and clone the project.
2. Run `npm install` from your command line to install dependencies (assumes you have Node and npm installed).
3. Set the environment variables specified below.
4. Run `npm run start` and visit `localhost:8080`.

### Environment variables

Rename the `.env.sample` file in the root of this project to `.env`. Update the following variable values:

* `NOTION_TOKEN`: the secret generated when you create a [new Notion integration](https://developers.notion.com/docs/create-a-notion-integration#step-1-create-an-integration).
* `DATABASE_ID`: the [ID for the database](https://developers.notion.com/docs/create-a-notion-integration#step-3-save-the-database-id) you want to use. Note, you need to first allow your integration to [access the database](https://developers.notion.com/docs/create-a-notion-integration#step-2-share-a-database-with-your-integration).

If you deploy your site on a platform like Netlify, you will need to set these same [environment variables](https://docs.netlify.com/environment-variables/overview/#app) there as well!