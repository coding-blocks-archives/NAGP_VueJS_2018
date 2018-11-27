// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  "default e2e tests": browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible("#app", 5000)
      .assert.elementPresent(".banner")
      .assert.containsText("h1", "conduit")
      .assert.elementCount(".nav-item", 5)
      .end();
  }
};
