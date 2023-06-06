Feature: Personal Details page

    Feature Liferay user Personal Details page.
     User with valid credentials must be able to navigate to Personal details page
      


    Scenario: User is to navigate to Personal details page
        Given user is on their SThree protal dashbaord page
        When user enters a the portal with valid credentials
        When user navigate to their Personal details page
        Then Personal details page must be displayed