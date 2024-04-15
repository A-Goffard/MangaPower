// https://docs.cypress.io/api/table-of-contents

describe('Login page testing', () => {
  it('Visits the LogingView url', () => {
    // Visita la página de inicio de sesión
    cy.visit('http://localhost:8080/#/login')
    cy.contains('h1', 'LOGIN')
    cy.contains('button', 'Login')
  }),
  it('Analyzing the login button')
    // Verifica que el botón "Login" esté inicialmente desactivado
    cy.get('button').contains('Login').should('be.disabled')
    // Marca el checkbox incluso aunque este no visible
    cy.get('input[type="checkbox"]').check({ force: true })
    // Verifica que el botón "Login" esté activado después de marcar el checkbox
    cy.get('button').contains('Login').should('not.be.disabled')
  })
});

describe('Register page testing', () => {
  it('Visits the RegisterView url', () => {
    // Visita la página de inicio de sesión
    cy.visit('http://localhost:8080/#/register')
    cy.contains('h1', 'REGISTER')
    cy.contains('button', 'Register')
  })
  it('Analyzing the Register button')
  // Verifica que el botón "Register" esté inicialmente desactivado
  cy.get('button').contains('Register').should('be.disabled')
  // Marca el checkbox incluso aunque este no visible
  cy.get('input[type="checkbox"]').check({ force: true })
  // Verifica que el botón "Register" esté activado después de marcar el checkbox
  cy.get('button').contains('Register').should('not.be.disabled')
})
});