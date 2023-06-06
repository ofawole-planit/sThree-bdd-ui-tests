
Feature: Creating a portal and placement for a new Contractor via API

   Create a portal for contractor 
   Create Client for contractor
   Create new Placement for the newly created contractor 



    Scenario: Create new placement for Contractor
      Given user has right permmisson to create portal for a Contractor
      Then placement must be sucessfully be created

    # Scenario: Create new Business User
    #   Given user has right permmisson to create a Business User account
    #   Then bussiness user account must be sucessfully be created
    
    # Scenario: Create New Client
    #   Given user has right permmisson to create a new Client
    #   Then client must be sucessfully be created

    
    # Scenario: Create new Placement 
    #   Given user has right permmisson to create Placement
    #   Then placement must be sucessfully be created