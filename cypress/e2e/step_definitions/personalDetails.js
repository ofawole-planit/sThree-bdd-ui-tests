/// <reference types="Cypress" />

import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";

  import {personalDetailsPage} from '@pages/PersonalDetailsPage';
  import {loginPage} from "@pages/LoginPage";

  
  Given ("user is on their SThree protal dashbaord page", () => {
    cy.visit(`${Cypress.env("STAGING_ENV")}`)
  })

  When ("user enters a the portal with valid credentials", () => {
    loginPage.enterUserNameAndPassword("jared.harris@email.com","sthree12")
  })


  When("user navigate to their Personal details page", () => {
    personalDetailsPage.navigateToPersonalDetailsPage()


  })

  Then ("Personal details page must be displayed", ()  => {
    personalDetailsPage.assertPageIsDsiplayed()
    loginPage.clickLogOut()
  })
