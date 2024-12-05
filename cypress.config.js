
const { defineConfig } = require('cypress');
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  watchForFileChanges: false,
  chromeWebSecurity:false,
  defaultCommandTimeout: 10000,
  reporter: 'cypress-mochawesome-reporter',
  projectId: 'wjnnjp',
  e2e: {
    setupNodeEvents(on, config) {
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });

      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });
    },
  },
});