require('dotenv').config();
const { Client } = require('@notionhq/client');
const notion = new Client({ auth: process.env.NOTION_TOKEN });
const databaseId = process.env.DATABASE_ID;

module.exports = async () => {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Tags",
        multi_select: {
          does_not_contain: "Private"
        }
      },
      sorts: [
        {
          property: "Tags",
          direction: "ascending"
        },
        {
          property: "Format",
          direction: "ascending"
        },
        {
          property: "Name",
          direction: "ascending"
        }
      ]
    });

    const resources = response.results.map(resource => resource.properties);
    console.log(resources);
    return resources;
  } catch(error) {
    console.error(error.body);
  }
};