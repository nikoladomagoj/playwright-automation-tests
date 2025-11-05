import { test, expect } from '@playwright/test';
import { SauceDemoPage } from '../pom/saucedemo.page';

test('test', async ({ page }) => {
  const demoPage = new SauceDemoPage(page);

  await demoPage.goto();

  await demoPage.username.click();
  await demoPage.username.fill('standard_user');
  await demoPage.password.click();
  await demoPage.password.fill('secret_sauce');
  await demoPage.loginButton.click();

  await demoPage.addToCart.click();
  await demoPage.shoppingCart.click();

  await demoPage.checkout.click();

  await demoPage.firstName.click();
  await demoPage.firstName.fill('test');
  await demoPage.lastName.click();
  await demoPage.lastName.fill('test');
  await demoPage.postalCode.click();
  await demoPage.postalCode.fill('10000');
  await demoPage.continueButton.click();

  await demoPage.finishButton.click();
});