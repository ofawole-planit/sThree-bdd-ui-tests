

class JobPlacementPage {
    // locators
    elements = {
        jobPlacementDetailsBtn: () => cy.contains('Job placement details').next(),
        jobPlacementDetailsPageTitle: () => cy.contains('Job placement details'),
        jobPlcmtDtlsJobTitleField: () => cy.contains('Job title'),
        jobPlcmtDtlsClientNameField: () => cy.contains('Client name'),
        jobPlcmtDtlsWorkSiteNameField: () => cy.contains('Worksite address'),
        jobPlcmtDtlCityNameField: () => cy.contains('City'),
        jobPlcmtDtlStateNameField: () => cy.contains('State'),
        jobPlcmtDtlZipCodeField: () => cy.contains('ZIP Code'),
        jobPlcmtDtlCountryFld: () => cy.contains('Country'),
    }

    // actions
    navigateToJobPlacementDetailsPage(){
        this.elements.jobPlacementDetailsBtn().click()
    }

    assertPageIsDisplayed() {
        cy.url().should('contain', 'details/placement')
        this.elements.jobPlacementDetailsBtn().click()
        this.elements.jobPlacementDetailsPageTitle().and('be.visible')
        this.elements.jobPlcmtDtlsJobTitleField().and('be.visible')
        this.elements.jobPlcmtDtlsClientNameField().and('be.visible')
        this.elements.jobPlcmtDtlsWorkSiteNameField().and('be.visible')
        this.elements.jobPlcmtDtlCityNameField().and('be.visible')
        this.elements.jobPlcmtDtlStateNameField().and('be.visible')
        this.elements.jobPlcmtDtlZipCodeField().and('be.visible')
        this.elements.jobPlcmtDtlCountryFld().and('be.visible')
    } 
}

export const jobPlacementPage = new JobPlacementPage();