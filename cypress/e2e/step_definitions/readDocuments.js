/// <reference types="Cypress" />

import { 
    Given, 
    When, 
    Then
} from "@badeball/cypress-cucumber-preprocessor";
import { readDocumentsPage } from "@pages/ReadDocumentsPage";
import { loginPage } from "@pages/LoginPage";


/** Background step */
Given("user is on SThree thier protal landing page", () => {
    cy.visit(`${Cypress.env("STAGING_ENV")}`)
    loginPage.enterUserNameAndPassword("jared.harris@email.com","sthree12")
});


/** start ==> Scenario: user must be able to Read Documents */
When("their has unread documents and user clicks on Read button from Documents read carousel", () => {
    readDocumentsPage.navigateToReadDocPage()
})

Then('Read documents page must be displayed', () => {
    readDocumentsPage.assertPageIsDisplayed()
})

Given('user clicks Read documents button to view documents', () => {
    readDocumentsPage.readDocumentBtn()
})

Then('document must be displayed', () => {
    readDocumentsPage.asseertDocumentIsDisplayed()
    loginPage.clickLogOut()
})
/** end ==> Scenario: user must be able to Read Documents */

/** start ==> Scenario: user must be able to Review read Documents */
When('user clicks on View Document from Documents read carousel to review read documents', () => {
    readDocumentsPage.readDocumentBtn()
})

Given('user clicks Review document again text link to view documents', () => {
    readDocumentsPage.reviewReadDocumentBtn()
})

Then ("read document must be displayed", () => {
    readDocumentsPage.asseertDocumentIsDisplayed()
    loginPage.clickLogOut()
})
/** end ==> Scenario: user must be able to Review read Documents */
