/// <reference types="Cypress" />
// cy not support async functions as callback

// context('Post not load without token', () => {
//   it('Redirect', () => {
//     cy.fixture('user').then((user) => {
//       cy.clearLocalStorage()
//       cy.visit('/register')
//       cy.get('#username').type(user.username + 1)
//       cy.get('#email').type(user.email + 1)
//       cy.get('#current-password').type(user.password)
//       cy.get('#new-password').type(user.password)
//       cy.get('button').click()
//       cy.wait(500)
//       cy.location('pathname').should('eq', '/')
//     })
//   })
// })

context('Token', () => {
  beforeEach(() => {
    cy.restoreLocalStorageCache()
  })
  
  afterEach(() => {
    cy.saveLocalStorageCache()
  })

  it('Get user', () => {
    cy.fixture('user').then((user) => {
      // cy.clearLocalStorage()
      cy.clearLocalStorageCache()
      cy.visit('/register')
      cy.get('#username').type(user.username + 1)
      cy.get('#email').type(user.email + 1)
      cy.get('#current-password').type(user.password)
      cy.get('#new-password').type(user.password)
      cy.get('button').click()
      cy.wait(500)
      cy.location('pathname').should('eq', '/')
    })
  })
})

context('Posts', () => {
  beforeEach(() => {
    cy.restoreLocalStorageCache()
  })
  
  afterEach(() => {
    cy.saveLocalStorageCache()
  })

  it('Not have children', () => {
    // cy.visit('/')

    cy.get('#posts').children().should('not.exist')
  })
})

context('Add post', () => {
  beforeEach(() => {
    cy.restoreLocalStorageCache()
  })
  
  afterEach(() => {
    cy.saveLocalStorageCache()
  })

  it('Not have title', () => {
    cy.get('#add-post').click()
    cy.contains('Titulo vacio')
  })

  it('Not have content', () => {
    cy.fixture('post').then((post) => {
      cy.get('#title').type(post.title)
      cy.get('#add-post').click()
      cy.contains('Contenido vacio')
    })
  })

  it('Not have image', () => {
    cy.fixture('post').then((post) => {
      cy.get('#content').type(post.content)
      cy.log('ADD IMAGE HANDLER')
      // cy.get('#title').type(post.title)
      // cy.get('button').click()
      // cy.contains('Contenido vacio')
    })
  })

  it('Was added', () => {
    // cy.fixture('unnamed.jpg').as('logo')
    // cy.get('#image').then(function($input) {
    //   // convert the logo base64 string to a blob
    //   const blob = Cypress.Blob.base64StringToBlob(this.logo, 'image/jpg')

    //   // pass the blob to the fileupload jQuery plugin
    //   // https://github.com/blueimp/jQuery-File-Upload
    //   // used in your application's code
    //   // which initiates a programmatic upload
    //   $input.fileupload('add', { files: blob })

    //   cy.get('#add-post').click()
    //   cy.wait(500)
    // })
    cy.fixture('unnamed.jpg').then((file) => {
      cy.get('#image').attachFile(file)
      cy.get('#add-post').click()
      cy.wait(500)
    })
  })

  it('List was added', () => {
    cy.get('#posts').children().should('exist')
    cy.reload()
    cy.get('#posts').children().should('exist')
  })

  it('Remove element', () => {
    cy.get('.remove-post').click()
    cy.contains('Cancelar').click()
    cy.get('#posts').children().should('exist')
    cy.contains('Eliminar').click()
    cy.get('#posts').children().should('not.exist')
    cy.reload()
    cy.get('#posts').children().should('not.exist')
  })

  it('Add post', () => {
    cy.fixture('post').then((post) => {
      cy.get('#title').type(post.title)
      cy.get('#content').type(post.content)
      cy.get('#add-post').click()
    })
  })

  it('Filter not have title', () => {
    cy.get('#filter-posts').click()
    cy.contains('No estas haciendo una busqueda por titulo o contenido')
  })

  it('Filter with title', () => {
    cy.fixture('post').then((post) => {
      cy.get('#filter-title').type(post.title)
      cy.get('#filter-posts').click()
      cy.get('#posts').children().should('exist')
    })
  })

  it('Filter with content', () => {
    cy.fixture('post').then((post) => {
      cy.get('#filter-title').clear()
      cy.get('#filter-content').type(post.content)
      cy.get('#filter-posts').click()
      cy.get('#posts').children().should('exist')
    })
  })
})
