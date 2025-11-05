import { test, expect } from '@playwright/test';
import { SauceDemoPage } from '../pom/saucedemo.page';
import { randomString } from '../utility/random';

  test.describe('SauceDemoPage', () => {
    let demoPage: SauceDemoPage;

    test.beforeEach(async ({ page }) => {
        demoPage = new SauceDemoPage(page);
        await demoPage.goto(); //prije svakog testa napravi mi ovo
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
        expect(demoPage.checkoutInfo).toBeInViewport(); //assertion da se projevi jel vidljiv checkout info
        await demoPage.firstName.click();
        await demoPage.firstName.fill(randomString(8)); //ovdje zovemo onu funckicju koja se nalazi u utility
        await demoPage.lastName.click();                           //broj predstavlja koliko će slova staviti u input, u ovom slučaju uzima 8 znakova
        await demoPage.lastName.fill(randomString(8));
        await demoPage.postalCode.click();
        await demoPage.postalCode.fill('10000');
        await demoPage.continueButton.click();
        expect(demoPage.totalPrice).toBeInViewport(); //assertion da se vidi total price
        await demoPage.finishButton.click();
        expect(demoPage.thankYou).toBeInViewport();  //assertion da se vidi ova na kraju poruka Thank you...
    });
})
