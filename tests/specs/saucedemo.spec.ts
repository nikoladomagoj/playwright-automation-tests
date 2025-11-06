import { test, expect } from '@playwright/test';
import { SauceDemoPage } from '../pom/saucedemo.page';
import { randomString } from '../utility/random';

  test.describe('SauceDemoPage', () => {
    let demoPage: SauceDemoPage;

    test.beforeEach(async ({ page }) => {
        demoPage = new SauceDemoPage(page);
        await demoPage.goto(); 
    });

    test('Login into demo page and buy something', async ({ }) => {
        await demoPage.username.click();
        await demoPage.username.fill('standard_user');
        await demoPage.password.click();
        await demoPage.password.fill('secret_sauce');
        await demoPage.loginButton.click();
        await demoPage.addToCart.click();
        await demoPage.shoppingCart.click();
        await demoPage.checkout.click();
        expect(demoPage.checkoutInfo).toBeInViewport(); 
        await demoPage.firstName.click();
        await demoPage.firstName.fill(randomString(8)); 
        await demoPage.lastName.click();                          
        await demoPage.lastName.fill(randomString(8));
        await demoPage.postalCode.click();
        await demoPage.postalCode.fill('10000');
        await demoPage.continueButton.click();
        expect(demoPage.totalPrice).toBeInViewport(); 
        await demoPage.finishButton.click();
        expect(demoPage.thankYou).toBeInViewport();  
    });
})
