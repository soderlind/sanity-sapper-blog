export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '6022a09114fd1d014c10d6d2',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-mzpvjozv',
                  apiId: 'c35262b0-3ff8-48d5-a7e3-b1cef19f692f'
                },
                {
                  buildHookId: '6022a092c39f7b00a48b9cf3',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-iua23xja',
                  apiId: '15f34eca-8336-49ce-9d7a-57bf6508bbcc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/soderlind/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-iua23xja.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
