/// <reference types="Cypress" />

import {
    Given,
    When,
    Then,} from "@badeball/cypress-cucumber-preprocessor";
  import {jobPlacementPage} from '@pages/JobPlacementPage'
  import { loginPage } from "@pages/LoginPage";

  
  Given ("user is on SThree protal dashboard landing page", () => {
    cy.visit(`${Cypress.env("STAGING_ENV")}`)
      loginPage.enterUserNameAndPassword( "jared.harris@email.com","sthree12")
  })


  When("user navigate to their Job placement details page", () => {
    jobPlacementPage.navigateToJobPlacementDetailsPage()
  })

  Then ("Job placement details page must be displayed", ()  => {
    jobPlacementPage.assertPageIsDisplayed()
    loginPage.clickLogOut()
})