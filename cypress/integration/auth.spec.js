/// <reference types="Cypress" />
// cy not support async functions as callback


context('Home without auth', () => {
  it('Redirect /login', () => {
    cy.visit('/')
    cy.wait(500)
    cy.location('pathname').should('eq', '/')
  })
})

context('Login with bad credentials', () => {
  it('Can visit page', () => {
    cy.visit('/login')
  })

  it('Without username', () => {
    cy.fixture('user').then((user) => {
      cy.get('#current-password').type(user.password)
      cy.get('button').click()
      cy.contains('Nombre de usuario vacio').should('be.visible')
    })
  })

  it('Without password', () => {
    cy.fixture('user').then((user) => {
      cy.get('#username').type(user.username)
      cy.get('#current-password').clear()
      cy.get('button').click()
      cy.contains('Contraseña vacia').should('be.visible')
    })
  })

  it('User no exist', () => {
    cy.fixture('user').then((user) => {
      cy.get('#username').clear()
      cy.get('#username').type(user.username)
      cy.get('#current-password').clear()
      cy.get('#current-password').type(user.password)
      cy.get('button').click()
      cy.contains('Nombre de usuario o contraseña equivocado').should('be.visible')
    })
  })

  it('Go to register', () => {
    cy.contains('registrate').and('have.attr', 'href').and('match', /^\/register$/)
    cy.visit('/register')
  })
})

context('Register', () => {
  it('Can visit page', () => {
    cy.visit('/register')
  })

  it('Without username', () => {
    cy.get('button').click()
    cy.contains('Nombre de usuario vacio').should('be.visible')
  })

  it('Without email', () => {
    cy.fixture('user').then((user) => {
      cy.get('#username').type(user.username)
      cy.get('button').click()
      cy.contains('Correo vacio').should('be.visible')
    })
  })

  it('Without password', () => {
    cy.fixture('user').then((user) => {
      cy.get('#email').type(user.email)
      cy.get('button').click()
      cy.contains('Contraseña vacia').should('be.visible')
    })
  })

  it('Password not match', () => {
    cy.fixture('user').then((user) => {
      cy.get('#current-password').type(user.password)
      cy.get('button').click()
      cy.contains('Contraseñas no coinciden').should('be.visible')
    })
  })

  it('Token', () => {
    cy.fixture('user').then((user) => {
      cy.get('#new-password').type(user.password)
      cy.get('button').click()
      cy.wait(500)
      cy.location('pathname').should('eq', '/')
    })
  })
})


context('Login', () => {
  it('Can visit page', () => {
    cy.clearLocalStorage()
    cy.visit('/login')
  })

  it('User no exist', () => {
    cy.fixture('user').then((user) => {
      cy.get('#username').type(user.username)
      cy.get('#current-password').type(user.password)
      cy.get('button').click()
      cy.wait(500)
      cy.location('pathname').should('eq', '/')
    })
  })
})