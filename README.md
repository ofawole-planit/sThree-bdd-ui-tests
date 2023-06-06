**Automation UI Tests**

This is End to End UI tests with Cypress framework

Dependencies: Node.js , Yarn, Chrome or Firefox browser.

After cloning the repo, first cd in to the root forlder in the terminal and run this `yarn install` to install the framework dependencies. 

How to run test locally:

- Headfull Mode: 
  `yarn cy:headfull`, 
  
- Headless Mode:
  `yarn cy:headless`
  
- To generate allure report: step 1: run `yarn cy:allure` step 2: run `yarn cy:allure-report`