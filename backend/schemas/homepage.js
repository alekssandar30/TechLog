export default {
    name: 'homepage',
    title: 'Home Page',
    type: 'document',
    __experimental_actions: ['update', 'publish'],
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
          name: 'homeImage',
          title: 'Home Page Image',
          type: 'image',
          options: {
              hotspot: true,
          }
      }
    ],
  }
  