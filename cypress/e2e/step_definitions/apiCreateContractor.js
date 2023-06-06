/// <reference types="Cypress" />

const fs = require("fs");
const path = require("path");

import { 
    Given, 
    When, 
    Then
} from "@badeball/cypress-cucumber-preprocessor";

/** Ask how to get {business_user_screen_name}} */
// Given('user has right permmisson to create a Business User account', () => {
//     cy.fixture('createBusinessUser.json').then(creteBusinessUser => {
//         cy.request({
//             method: 'POST', 
//             url: 'https://portal.dev.specialiststaffinggroup.com/o/headless-admin-user/v1.0/user-accounts',
//             headers: {
//                 'Authorization': 'Basic ' + btoa('test@sthree.com:123'),
//                 'Content-Type': 'application/json',
    
//             },
//             body: creteBusinessUser
//         }).then((resp) => {
//             expect(resp.status).to.eq(200)
//         })
//     })
// })


// Given('user has right permmisson to create a new Client', () => {
//     cy.fixture('createClient.json').then(createClient => {
//         cy.request({
//             method: 'POST', 
//             url: 'https://portal.dev.specialiststaffinggroup.com/o/headless-mercury/v1.0/push/Clients',
//             headers: {
//                 'Authorization': 'Basic ' + btoa('test@sthree.com:123'),
//                 'Content-Type': 'application/json',
    
//             },
//             body: createClient
//         }).then((resp) => {
//             expect(resp.status).to.eq(200)
//         })
//     })
// })


// Given('user has right permmisson to create a new Placement', () => {
//     cy.fixture('createPlacement.json').then(createPlacement => {
//         cy.request({
//             method: 'POST', 
//             url: 'https://portal.dev.specialiststaffinggroup.com/o/headless-mercury/v1.0/push/Clients',
//             headers: {
//                 'Authorization': 'Basic ' + btoa('test@sthree.com:123'),
//                 'Content-Type': 'application/json',
    
//             },
//             body: createPlacement
//         }).then((resp) => {
//             expect(resp.status).to.eq(200)
//         })
//     })
// })


// Ask the devs how to get "alternateName": "{{candidate_id}}", from post body
// Given('user has right permission to create a portal for a Contractor', async () => {
//     const contractorDetails = require('createContractor.json');
//     const response = await cy.request({
//       method: 'POST',
//       url: 'https://portal.dev.specialiststaffinggroup.com/o/headless-admin-user/v1.0/user-accounts/',
//       headers: {
//         'Authorization': 'Basic ' + btoa('test@sthree.com:123'),
//         'Content-Type': 'application/json',
//       },
//       body: contractorDetails
//     });
  
//     expect(response.status).to.eq(200);
  
//     const placementId = require('createClient.json');
//     placementId.placementId = `${response.candidate.id}`;
//     cy.writeFile('cypress/fixtures/createClient.json', placementId);
//     const updatedID = await cy.readFile('cypress/fixtures/createClient.json');
//     expect(updatedID.placementId).to.equal(`${response.candidate.id}`);
//   });

Given('user has right permmisson to create portal for a Contractor', () => {
    cy.fixture('createContractor.json').then(contractorDetails => {
        const filePath = "cypress/fixtures/response.json";
        cy.request({
            method: 'POST',
            url: 'https://portal.dev.specialiststaffinggroup.com/o/headless-admin-user/v1.0/user-accounts/',
            headers: {
                'Authorization': 'Basic ' + btoa('test@sthree.com:123'),
                'Content-Type': 'application/json'
            },
            body: contractorDetails,
            json: true
        }).then((resp) => {
            expect(resp.status).to.eq(200);
            fs.writeFile(filePath, JSON.stringify(response, null, 2));
            // cy.readFile('createClient.json').then((placementId) => {
            //     placementId.placementId = `${resp.cadidate.id}`;
            //     cy.writeFile('cypress/fixtures/createClient.json', placementId);

            //     // Assert the value has been written correctly
            //     cy.readFile('cypress/fixtures/createClient.json').then((updatedID) => {
            //         expect(updatedID.placementId).to.equal(`${resp.cadidate.id}`);
            //     });
            // });
        });
    });
});


/** What is the expected response after creating a new protal for contractor */
Then('protal must be sucessfully created', () => {
    cy.request({
        method: 'GET', 
        url: 'https://apim-uks-thirdpartyintegration-prod.azure-api.net',
        headers: {
            'Authorization': 'Basic ' + btoa('test@sthree.com:123'),
            'Content-Type': 'application/json',
        }
    }).then((resp) => {
        expect(resp.status).to.eq(200);
        expect(response.body.firstName).to.eq('Boaty');
        expect(response.body.lastName).to.eq('McBoatface');
        expect(response.body.mobilePhone).to.eq('999-867-5309');
        expect(response.body.address.line1).to.eq('123 Candidate Record Ln"');
        expect(response.body.address.country.name).to.eq('United States');
    })
})