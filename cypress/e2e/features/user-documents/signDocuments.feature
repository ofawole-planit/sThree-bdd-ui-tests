Feature: Sign Documents

    New and existing candidate must be able to
    Sign unsigned documents and Review signed documents

    Background: 
        Given user is on sthree protal landing page

    Scenario: user must be able to Sign Documents
        When user has unsigned documents and user clicks on Sign documents button from Documents sign carousel
        Then Sign documents page must be displayed
        Given user clicks Open and Sign button to view document to sign
        Then selected document must be displayed
        Given user signed the document
        # Then signed document must be in pending state 

     # TODO: when test account is dynamic
    #  Scenario: user must be able to Review approved singed Documents 
    #     When user clicks on View documents to review approved singed document 
    #     Then Sign documents page must be displayed
    #     Given user clicks Review approved signed document
    #     Then approved signed document must be displayed