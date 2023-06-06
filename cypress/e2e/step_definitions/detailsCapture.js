/// <reference types="Cypress" />

import { 
    Given, 
    When, 
    Then
} from "@badeball/cypress-cucumber-preprocessor";
import { detailsCapturePage } from "@pages/DetailsCapturePage";
import { loginPage } from "@pages/LoginPage";


Given("user is on their protal landing page",() => {
    cy.visit(`${Cypress.env("STAGING_ENV")}`)
    loginPage.enterUserNameAndPassword("jared.harris@email.com","sthree12")
})


When("user navigates to Details to Capture page", () => {
    detailsCapturePage.navigateToDetailsToCapturePage()
})

Then("Payment details page must be displayed", () => {
    detailsCapturePage.assertPaymentDetailsPage()
})

When('user navigates to Payment details page', () =>  {
    detailsCapturePage.navigateToPaymentDetailsPage()
})

Then('Bank details for payments page must be displayed', () => {
    detailsCapturePage.assertBankDetailsPage()
})

When("user clicks Add Checking Account button to add details", () => {
    detailsCapturePage.clickAddCheckingAcctBtn()
});

Then("Direct deposit details must be displayed", () => {
    detailsCapturePage.assertPaymentDetailsPage()
})

Then("Checking account form must be displayed", () =>  {
    detailsCapturePage.assertCheckingAcctFormFieldTitles()
})

When('user clicks Add Savings Account', () => {
    detailsCapturePage.clickAddSavingAcctBtn()
})

Then ('Savings Account form must be displayed', () => {
    detailsCapturePage.assertSavingAcctFormFieldTitles()
})

// ======

When ("user is on Payment details page", () => {
    detailsCapturePage.navigateToDetailsToCapturePage()
    detailsCapturePage.navigateToPaymentDetailsPage()
    detailsCapturePage.assertPaymentDetailsPage()
    detailsCapturePage.clickAddCheckingAcctBtn()
    detailsCapturePage.clickAddSavingAcctBtn()
    
})

When ("user clicks Submit button without filling the required fields", () => {
    detailsCapturePage.clickSumbitBtn()
})

Then ("error messages must be displayed", () => {
    detailsCapturePage.asertErrMsgIsDisplayed()
})