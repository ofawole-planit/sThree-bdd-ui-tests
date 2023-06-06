/// <reference types="Cypress" />

import {
  Given,
  When,
  Then,
  Before,
  After,
  
} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from '@pages/LoginPage'

Before(() => {
  cy.clearAllSessionStorage()
})

After(() => {
  cy.clearAllSessionStorage()
})

// Back ground 
Given("User is on SThree protal landing page", () => {
  cy.visit(`${Cypress.env("STAGING_ENV")}`) 
});


// Scenario: Username field is required error messages
When("user enters password {string}, without username and clicks Sign In button", (password) => {

  loginPage.enterPassword(password)
  loginPage.clickSignIn()
 
})

Then("error message {string} must be displayed", (errMsg) => {
  loginPage.assertErrMsgIsDisplayed(errMsg)
})

// Scenario: Password field is required error messages
When("user enters username {string}, without password and clicks Sign In button", (username) => {
  loginPage.enterUserName(username)
  loginPage.clickSignIn()
})

Then("error message {string} must be displayed ", (errMsg) => {
  loginPage.assertErrMsgIsDisplayed(errMsg)
})

// Scenario: Valid user logIn
When("A user enters valid username {string}, password {string}, and clicks on the login button", (username,password) => {
  loginPage.validUserSignIn(username,password)
  
});

Then("the user protal landing dashbaord page must display", () => {
  loginPage.assertDashBoardUrl()
  loginPage.clickLogOut()
  loginPage.assertLogOutPageIsDisplayed()
});


// Scenario: Invalid username or password logIn
When("A user enters invalid username {string}, password {string}, and clicks on the login button", (username,password) => {
    loginPage.invalidUsrNameOrPassword(username, password)
});

Then("the error message {string} must be displayed", (errMsg) => {
  loginPage.assertErrMsgIsDisplayed(errMsg)
});