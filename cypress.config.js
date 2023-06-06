const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");



async function setupNodeEvents(on, config) {
 await preprocessor.addCucumberPreprocessorPlugin(on, config);
   
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

   require("cypress-mochawesome-reporter/plugin")(on)
 
   allureWriter(on, config);

  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: [
     // "cypress/e2e/features/**/newUserLogin.feature",
      "cypress/e2e/features/**/*.feature"
    ],
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: "cypress/report/mochawesome-report",
    reportTitle: 'UI Automation Tests Report',
    charts: true,
    reportPageTitle: 'UI Automation Tests Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
    nonGlobalStepDefinitions: true,
    baseUrl: "https://portal.qa.specialiststaffinggroup.com/o/web/login",
    chromeWebSecurity: false,
    env: {
      DEV_ENV: "",
      STAGING_ENV: "https://portal.qa.specialiststaffinggroup.com/onboarding/#/dashboard",
      UAT_ENV: "",
      PROD_ENV: '',
      allureReuseAfterSpec: false,
    },
    pageLoadTimeout: 10000,
    defaultCommandTimeout: 18000,
  }
});