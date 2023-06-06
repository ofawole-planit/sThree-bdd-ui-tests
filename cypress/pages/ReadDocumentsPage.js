/// <reference types="Cypress" />

class ReadDocumentsPage {
    // locators
    elements = {
        readDocBtn:  () => cy.contains('Read documents'),
        pageTitle: () => cy.contains('Read documents'),
        // use this locator until test account is no more static
        viewDocBtn: () => cy.xpath("(//button[@type='button'][normalize-space()='View documents'])[1]"),
        /** uncomment and use the below code when test account is no more static */  
        // reviewDocBtn: () => cy.xpath("(//button[@type='button'][normalize-space()='Read document'])[1]"),
        reviewDocAgainBtn: () => cy.xpath("(//button[@type='button'][normalize-space()='Review document again'])[2]"),
        pdfReaderPopUp: () => cy.get('body').find('iframe'),
        iframeCloseBtn: () =>  cy.contains('Close') //cy.xpath('(//button[normalize-space()="Close"])[1]'),
    }

    // actions
    navigateToReadDocPage() {
        cy.wait(4000)
        this.elements.readDocBtn().click()
    }

    readDocumentBtn() {
        const unreadDocBtn = this.elements.viewDocBtn()
        cy.get(unreadDocBtn).then($rBtn => {
            if ($rBtn.length > 0) {  
                unreadDocBtn.click()
            }
        });
    }

    reviewReadDocumentBtn() {
        const readDocTxtLink = this.elements.reviewDocAgainBtn()
        cy.get(readDocTxtLink).then($rBtn => {
            if ($rBtn.length > 0) {  
                readDocTxtLink.click()
            }
        });
    }

    // assertions
    assertPageIsDisplayed() {
        cy.url().should('include', '/dashboard/documents')
        this.elements.pageTitle().should('be.visible')
    }

    asseertDocumentIsDisplayed() {
        this.elements.pdfReaderPopUp().should('exist');
        this.elements.iframeCloseBtn().should('exist');
        this.elements.iframeCloseBtn().click()
    }
}

export const readDocumentsPage = new ReadDocumentsPage()