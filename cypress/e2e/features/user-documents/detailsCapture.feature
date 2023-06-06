Feature: Compelete details 

    New and existing candidate must be able to
    Compelete and Edit Bank details 

    Background:
        Given user is on their protal landing page

    Scenario: user must be able to enter and submit bank details 
        When user navigates to Details to Capture page
        Then Payment details page must be displayed
        When user navigates to Payment details page
        Then Bank details for payments page must be displayed
        When user clicks Add Checking Account button to add details
        Then Checking account form must be displayed
        When user clicks Add Savings Account
        Then Savings Account form must be displayed

    Scenario: user must not be able to sumbit details if requirement fields are not filled
        When user is on Payment details page
        When user clicks Submit button without filling the required fields
        Then error messages must be displayed
