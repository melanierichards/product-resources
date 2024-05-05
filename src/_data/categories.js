require('dotenv').config();
const { Client } = require('@notionhq/client');
const notion = new Client({ auth: process.env.NOTION_TOKEN });
const databaseId = process.env.DATABASE_ID;

module.exports = async () => {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        and: [
          {
            property: "Private",
            checkbox: {
              equals: false
            }
          },
          {
            property: "Category",
            select: {
              does_not_equal: "News"
            }
          }
        ]
      },
      sorts: [
        {
          property: "Category",
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

    // Transform the response to restructure resources by category
    const categories = Object.values(resources.reduce((accumulator, current_value) => {
      let catName = current_value.Category.select.name;

      //  If the category attached to the resource is not already in categories, add it
      if (!accumulator.hasOwnProperty(catName)) {
        accumulator[catName] = {name: catName, items: []}
      }

      // Add the resource itself to the category
      accumulator[catName].items.push(current_value);

      return accumulator;
    }, {}));
    console.log(categories);
    return categories;
  } catch(error) {
    console.error(error.body);
  }
};