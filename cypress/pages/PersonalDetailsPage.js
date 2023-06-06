/// <reference types="Cypress" />

class PersonalDetailsPage {

    // locators
    elements = {
        personalDetailsBtn: () => cy.contains('Personal details').next(),
        personalDetailsTitlePage: () => cy.contains('Your personal details'),
        prsnlDtlsFirstNameField: () => cy.contains('First Name'),
        prsnlDtlsLastNameField: () => cy.contains('Last Name'),
        prsnlDtlsEmailField: () => cy.contains('Email'),
        prsnlDtlsPhoneNumField: () => cy.contains('Phone number'),
        prsnlDtlsAdrrField: () => cy.contains('Address'),
        prsnlDtlsCityNameField: () => cy.contains('City'),
        prsnlDtlsStateNameField: () => cy.contains('State'),
        prsnlDtlsZipCodeField: () => cy.contains('ZIP Code'),
        prsnlRemoveDtlsBtn: () => cy.contains('Remove my details')
    }

    //actions
    navigateToPersonalDetailsPage( ){
        this.elements.personalDetailsBtn().click()
    }

    
    // assertions
    assertPageIsDsiplayed() {
        cy.url().should('contain', 'onboarding/#/details/personal')
        this.elements.personalDetailsTitlePage().and('be.visible')
        this.elements.prsnlDtlsFirstNameField().and('be.visible')
        this.elements.prsnlDtlsLastNameField().and('be.visible')
        this.elements.prsnlDtlsEmailField().and('be.visible')
        this.elements.prsnlDtlsPhoneNumField().and('be.visible')
        this.elements.prsnlDtlsAdrrField().and('be.visible')
        this.elements.prsnlDtlsCityNameField().and('be.visible')
        this.elements.prsnlDtlsCityNameField().and('be.visible')
        this.elements.prsnlDtlsZipCodeField().and('be.visible')
        this.elements.prsnlRemoveDtlsBtn().and('be.visible')
    }



}

export const personalDetailsPage = new PersonalDetailsPage();