/// <reference types="Cypress" />

class DetailsCapturePage {
    // locators
    elements = {
        captureDetailsBtn : () => cy.contains('Capture details'),
        pageTitle : () => cy.contains('Payment details'),
        completeDetailsBankAcctBtn : () => cy.xpath('(//button[normalize-space()="Complete details"])[1]'),
        paymentDetailsPageTitle: () => cy.contains('Payment details'),
        directDepositPageInfo: () => cy.contains('You can add up to two accounts to split your salary if needed.'),
        addCheckingAcctBtn:  () => cy.get('[data-testid="add-checking-btn"]'),
        addSavingsAcctBtn: () => cy.contains('Add Savings Account'),
        checkingAccountForm : () => cy.contains('Checking account'),
        SavingAccountForm: () => cy.contains('Savings account'),
        checkingAcctDepoTxtField: () => cy.get('[data-testid="checking.percentageForAccount"]'),
        checkingBankNameTxtField: () => cy.get('[data-testid="checking.bankName"]'),
        checkingAcctRoutingNumTxtFeild: () => cy.get('[data-testid="checking.routingNumber"]'),
        checkingAcctNumTxtField: () => cy.get('[data-testid="checking.accountNumber"]'),
        directDepositAuthoriseCheckBox: () => cy.get('input[name="withdrawalsAuthorization"]'),
        directDepositAgreementCheckBox:  () => cy.get('input[name="responsibilityAgreement"]'),
        submitDetailsBtn: () => cy.contains('Submit details')
    }

    actions
    navigateToDetailsToCapturePage() {
        this.elements.captureDetailsBtn().click()
    }

    navigateToPaymentDetailsPage() {
        this.elements.completeDetailsBankAcctBtn().click()
    }

    clickAddCheckingAcctBtn() {
        this.elements.addCheckingAcctBtn().click()
    }

    clickAddSavingAcctBtn() {
        this.elements.addSavingsAcctBtn().click()
    }

    clickSumbitBtn() {
        this.elements.submitDetailsBtn().click()
    }

    // assertions
    assertPaymentDetailsPage() {
        this.elements.pageTitle().should('be.visible')
    }

    assertBankDetailsPage() {
        this.elements.directDepositPageInfo().should('be.visible')
        this.elements.directDepositPageInfo().should('be.visible')
    }

    assertCheckingAcctFormFieldTitles() {
        const fieldTitles = {
            depositFieldTitle : 'How much would you like to be deposit in your account',
            bankNameFieldTitle : 'Name of Financial Institution',
            routingNumFieldTitle :'Routing number',
            accontNumFieldTitle : 'Account number'
        }

        const checkingAcctForm = this.elements.checkingAccountForm().siblings()
        checkingAcctForm.should(($fieldTitle) => {
            expect($fieldTitle).to.have.length(4)
            expect($fieldTitle.eq(0)).to.contain(fieldTitles.depositFieldTitle)
            expect($fieldTitle.eq(1)).to.contain(fieldTitles.bankNameFieldTitle)
            expect($fieldTitle.eq(2)).to.contain(fieldTitles.routingNumFieldTitle)
            expect($fieldTitle.eq(3)).to.contain(fieldTitles.accontNumFieldTitle)
        })
    }

    assertSavingAcctFormFieldTitles() {
        const fieldTitles = {
            depositFieldTitle : 'How much would you like to be deposit in your account',
            bankNameFieldTitle : 'Name of Financial Institution',
            routingNumFieldTitle :'Routing number',
            accontNumFieldTitle : 'Account number'
        }

         const savingAcctForm = this.elements.SavingAccountForm().siblings()
         savingAcctForm.should(($fieldTitle) => {
            expect($fieldTitle).to.have.length(4)
            expect($fieldTitle.eq(0)).to.contain(fieldTitles.depositFieldTitle)
            expect($fieldTitle.eq(1)).to.contain(fieldTitles.bankNameFieldTitle)
            expect($fieldTitle.eq(2)).to.contain(fieldTitles.routingNumFieldTitle)
            expect($fieldTitle.eq(3)).to.contain(fieldTitles.accontNumFieldTitle)
        })
    }

    asertErrMsgIsDisplayed() {
        const fieldErrMsgs =  {
            depositFieldErrMsg: 'Enter a number followed by a "%" (e.g., 12%)',
            bankNameFieldErrMsg: 'Financial Institution is required',
            routingNumFieldErrMsg: 'Routing number requires 9-digit long',
            accontNumFieldErrMsg: 'Account number requires 6-17 digit long',
        }
    
        const checkingAcctForm = this.elements.checkingAccountForm().siblings()
        checkingAcctForm.should(($fieldTitle) => {
            expect($fieldTitle).to.have.length(4)
            expect($fieldTitle.eq(0)).to.contain(fieldErrMsgs.depositFieldErrMsg)
            expect($fieldTitle.eq(1)).to.contain(fieldErrMsgs.bankNameFieldErrMsg)
            expect($fieldTitle.eq(2)).to.contain(fieldErrMsgs.routingNumFieldErrMsg)
            expect($fieldTitle.eq(3)).to.contain(fieldErrMsgs.accontNumFieldErrMsg)
        })
    
    }
}

export const detailsCapturePage = new DetailsCapturePage()