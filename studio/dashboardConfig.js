export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61f6c0c14c4a46e1a31dbf54',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-9hrvww1h',
                  apiId: '649d39d6-e8ed-4951-a4bd-2a56ac9a1c36'
                },
                {
                  buildHookId: '61f6c0c1c7854449b9b4305b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-k7c3e4oo',
                  apiId: '2565cdd6-2c95-4df5-af24-912629a65403'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zawsx/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-k7c3e4oo.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
