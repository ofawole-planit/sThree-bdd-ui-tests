/// <reference types="Cypress" />

class LoginPage {

    // locators
    elements = {
        usernameInput: () => cy.get('#_com_liferay_login_web_portlet_LoginPortlet_login'),
        passowrdInput: () => cy.get('#_com_liferay_login_web_portlet_LoginPortlet_password'),
        signInBtn: () => cy.xpath('//button//span[text()="Sign In"]'),
        personalMenuDropDown: () => cy.get('button[aria-label="Personal Menu"]'),
        dashBoardHeader: () => cy.contains('Your onboarding is almost done'),
        logOutTxtLink: () => cy.get('a[href="/c/portal/logout"]'),
        logOutPage: () => cy.contains('Welcome to Liferay Portal'),
        signInTxtLink: () => cy.contains('Sign In'),
        errMsg: (err) => cy.contains(err),
        errMsgLogInField:() => cy.contains('The Login field is required.'),
        errMsgPasswordField: () => cy.contains('The Password field is required.'),

    }

    
    // actions
    enterUserName(username) {
        this.elements.usernameInput().type(username, {force: true})
    }

    enterPassword(password) {
        this.elements.passowrdInput().type(password, {force: true})
    }

    clickSignIn() {
        this.elements.signInBtn().click()
    }

    clickLogOut() { 
        this.elements.logOutTxtLink().click({ multiple: true })
    }

    enterUserNameAndPassword(username, password) {
        this.enterUserName(username)
        this.enterPassword(password)
        this.elements.signInBtn().click()
    }

    validUserSignIn(username, password) {
        this.enterUserNameAndPassword(username, password)
        this.elements.dashBoardHeader().should('be.visible')
    } 

    invalidUsrNameOrPassword(username, password) {
        this.enterUserNameAndPassword(username, password)
        this.elements.signInBtn().click()
    }

    // assertions
    assertDashBoardUrl() {
        cy.url().should('contains', 'onboarding/#/dashboard')
    }

    assertLogOutPageIsDisplayed() {
        this.elements.logOutPage().should('be.visible')
        cy.url().should('contain', 'web/guest/home')
        
    }

    assertErrMsgIsDisplayed(errMsg) {
        this.elements.errMsg(errMsg).should('be.visible')
    }

    assertEmailRequiredErrMsgIsDisplayed() {
        this.elements.errMsgLogInField().should('be.visible')
    }

    assertPasswordRequiredErrMsgIsDisplayed() {
        this.elements.errMsgPasswordField().should('be.visible')
    }


}

export const loginPage = new LoginPage();