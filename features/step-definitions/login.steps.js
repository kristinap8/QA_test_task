import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, browser } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';


Given(/^User is located on the main page of saucedemo website$/, async () => {
  await LoginPage.open()
});

When(/^User click login button$/, async () => {
  await LoginPage.login()
});

Then(/^User should see "(.*)"$/, async (message) => {
  await expect(LoginPage.errorMessage).toHaveText(message)
});
