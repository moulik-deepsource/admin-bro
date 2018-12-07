const { BaseDecorator } = require('../../admin/index')

class ArticleDecorator extends BaseDecorator {
  constructor(params) {
    super(params)
    this.resourceName = 'Artykuly'
    this.listProperties = ['title', 'content', 'publishedAt']
    this.showProperties = ['publishedAt']
    this.parentName = 'Wiedza',
    this.recordActions = ['show', 'edit', 'remove',
      {
        id: 'publish',
        icon: 'share',
        label: 'Publish',
        action: (request, response, view) => {
          const { method } = request
          if(method === 'POST') {
            return 'Some content or form which you want to place here' 
          } else {
            return 'PUBLISH ACTION WORKS'
          }
        }
      }
    ]
  }

  getValue({ record, property, where, helpers }) {
    switch (property.name()) {
    case 'publishedAt':
      return `
        <p>Here goes a paragraph</p>
        <p>and another one</p>
        <a href="${helpers.showRecordUrl(record.resource, record)}">Link somewere</>
      `
    default:
      return super.getValue({ record, property, where, helpers })
    }
  }
}

module.exports = ArticleDecorator
