/// <reference types="Cypress" />

import { 
    Given, 
    When, 
    Then
} from "@badeball/cypress-cucumber-preprocessor";
import { signDocumentsPage } from "@pages/SignDocumentsPage";
import { loginPage } from "@pages/LoginPage";

/** Background step */
Given ("user is on sthree protal landing page",() => {
    cy.visit(`${Cypress.env("STAGING_ENV")}`)
    loginPage.enterUserNameAndPassword("jared.harris@email.com","sthree12")
})

/** start ==> Scenario: user must be to Sign Documents */
When ("user has unsigned documents and user clicks on Sign documents button from Documents sign carousel", () => {
    signDocumentsPage.navigateToSignDocPage()
})

Then ("Sign documents page must be displayed", () => {
    signDocumentsPage.assertPageIsDisplayed()
})

Given ("user clicks Open and Sign button to view document to sign", () => {
    signDocumentsPage.openAndSignDoc()
})

Then ("selected document must be displayed",  () => {
   // signDocumentsPage.assertDocIsDisplayed()

})

Given ("user signed the document", () => {
    signDocumentsPage.clickContToSign()
    signDocumentsPage.closeIframeDocPopup()

    // uncomment when test data is dynamic
    // signDocumentsPage.clickSignIconToSign()
    // signDocumentsPage.clickFinishOnDoc()
    //signDocumentsPage.assertSignatureOnDoc()
    // signDocumentsPage.deletelSignatureTxt()
    // signDocumentsPage.closeIframeDocPopup()
})

Then ("signed document must be in pending state", () => {
    signDocumentsPage.assertSignedDocPendingState()
})

/** end ==> Scenario: user must be able to Read Documents */