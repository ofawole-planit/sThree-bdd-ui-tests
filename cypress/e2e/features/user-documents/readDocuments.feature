Feature: Read Documents

    New and existing candidate must be able to
    Read unread documents and Reread read documents

    Background: 
        Given user is on SThree thier protal landing page

        ## Due to static test account at the moment this scenario can't be run, will be uncommented when test account is dynamic
    # Scenario: user must be able to Read Documents
    #     When their has unread documents and user clicks on Read button from Documents read carousel
    #     Then Read documents page must be displayed
    #     Given user clicks Read documents button to view documents
    #     Then document must be displayed

     Scenario: user must be able to Review read Documents
        When user clicks on View Document from Documents read carousel to review read documents
        Then Read documents page must be displayed
        Given user clicks Review document again text link to view documents
        Then read document must be displayed