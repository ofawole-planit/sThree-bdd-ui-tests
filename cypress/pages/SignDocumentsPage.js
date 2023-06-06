/// <reference types="Cypress" />

class SignDocumentsPage {
    // locators
    elements = {
        signDocBtn : () => cy.contains('Sign documents'),
        pageTitle: () => cy.contains('Sign documents'),
        openAndSignBtn: () => cy.contains('Open and sign'),
        iframePopUp: () => cy.get('body').find('iframe'),
        iframeContBtn: () => cy.iframe().get('[data-qa="continue-button-wrapper"] >> button[data-qa="action-bar-btn-continue"]'),
        iframeContBtn1: () => cy.iframe().contains('Continue'),
        iframeSignature: () => cy.iframe().find('[data-qa="SignHere"]'),
        iframeDoc: () => cy.iframe().find('[data-page-id="1e8cbfb4-1e58-4e04-823c-92b89e057a7e"]'),
        signatureTxt: () => cy.iframe().find('.freeform-resize-wrapper'),
        iframeFinishBtn: () => cy.iframe().find('[data-qa="slide-up-bar-finish-button"]'),
        deletelSignature: () => cy.iframe().find('.freeform-delete-wrapper'),
        closeIframePopUp: () => cy.contains('Close'),
        iframeDeteleFormBtn: () => cy.iframe().find('[data-qa="freeform-delete"]'),
        signedDocPendingState: () => cy.contains('Pending validation')
    }

    // actions
    navigateToSignDocPage () {
        this.elements.signDocBtn().click()
    }

    openAndSignDoc () {
        const unSignedBtn = this.elements.openAndSignBtn()

        cy.get(unSignedBtn).then($rBtn => {
            if ($rBtn.length > 0) {  
                cy.wait(20000)
                unSignedBtn.click()
                cy.wait(18000)
            }
        });
    }

    
clickContToSign () {
        this.elements.iframeContBtn1().click()
        //this.elements.iframeContBtn().should('be.visible').click()
    }

    clickSignIconToSign () {
        this.elements.iframeSignature().click()
        this.elements.iframeSignature().trigger('mousemove', {clientX: 400, clientY: 400})
        this.elements.signatureTxt().click()
    }

    deletelSignatureTxt() {
        this.elements.deletelSignature().click()
    }

    closeIframeDocPopup () {
        this.elements.closeIframePopUp().click()
    }

    clickFinishOnDoc () {
        this.elements.iframeFinishBtn().click()
        this.closeIframeDocPopup()
    }

    // assertions
    assertPageIsDisplayed () {
        this.elements.pageTitle().and('be.visible')
    }

    assertDocIsDisplayed () {
        cy.wait(20000)
        // this.elements.iframePopUp().should('exist')
        cy.log('just checking', this.elements.iframeContBtn())
       // this.clickContToSign()
        // this.elements.iframeContBtn().click()
    }

    assertSignatureOnDoc () {
        this.elements.iframeDeteleFormBtn().should('exist')
    }

    assertSignedDocPendingState() {
        this.elements.signedDocPendingState().should('be.visible')
    }
}

export const signDocumentsPage = new SignDocumentsPage();