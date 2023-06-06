Feature: Onboarding dashbaord page

    Display login page.
    User with valid credentials must be able to see their Dashbaord,
    able to navigate to Job placement details page, and
    able to navigate to Personal details page


    Background:
        Given User is on SThree protal landing page


    Scenario: Username field is required error message
        When user enters password "just4test", without username and clicks Sign In button
        Then error message "The Login field is required." must be displayed

    # Scenario: Password field is required error message
    #     When user enters username "jared.harris@email.com", without password and clicks Sign In button
    #     Then error message "The Password field is required." must be displayed          

    # Scenario: Valid user login
    #     When A user enters valid username "jared.harris@email.com", password "sthree12", and clicks on the login button
    #     Then the user protal landing dashbaord page must display

    # Scenario: Invalid username or password login
    #     When A user enters invalid username "jared.harris@email.com", password "just4Test", and clicks on the login button
    #     Then the error message "Authentication failed. Please try again." must be displayed
    
    
