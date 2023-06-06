// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })




Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
return false
})


Cypress.Commands.add('createNewCandidateUser', (firstname, lastname, email) => {
    cy.request('POST', 'https://portal.qa.specialiststaffinggroup.com/admin/createcandidateuser', {
      name: firstname,
      lastname: lastname,
      email: email,
    }).then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body.message).to.eq('User created successfully. Please check your email for a verification link.')
        cy.wrap(response.body.newUserLink).as('verifyNewUserLink')
    })
  })
  
  Cypress.Commands.add('mockNewCandidateResponse', () => {
    cy.intercept('POST', 'https://portal.qa.specialiststaffinggroup.com/admin/createcandidateuser', (req) => {
      req.reply({
        statusCode: 200,
        body: {
            newUserLink: 'https://portal.qa.specialiststaffinggroup.com/verify?token=abcd1234efgh5678?token=abc123'
        }
      })
    })
  })
  