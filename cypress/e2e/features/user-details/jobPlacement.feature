Feature: Job Placement page

    Feature Liferay user Job Placement page.
     User with valid credentials must be able to navigate to their Job Placement page
      


    Scenario: User is to navigate to Job placement details page
        Given user is on SThree protal dashboard landing page
        When  user navigate to their Job placement details page
        Then  Job placement details page must be displayed