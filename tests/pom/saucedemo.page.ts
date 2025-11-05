import { Page, Locator } from '@playwright/test';

export class SauceDemoPage {
   page: Page;
   username: Locator;
   password: Locator;
   loginButton: Locator;
   addToCart: Locator;
   shoppingCart: Locator;
   checkout: Locator;
   firstName: Locator;
   lastName: Locator;
   postalCode: Locator;
   continueButton: Locator;
   finishButton: Locator;
   checkoutInfo: Locator;
   totalPrice: Locator;
   thankYou: Locator;

   //ne treba ti readonly, to zapravo znači da se taj locator ne može mjenjati što nema smisla

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('[data-test="username"]');
    this.password = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.addToCart = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.shoppingCart = page.locator('[data-test="shopping-cart-link"]');
    this.checkout = page.locator('[data-test="checkout"]');
    this.firstName = page.locator('[data-test="firstName"]');
    this.lastName = page.locator('[data-test="lastName"]');
    this.postalCode = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.checkoutInfo = page.locator('[data-test="title"]');
    this.totalPrice = page.locator('[data-test="total-info-label"]');
    this.thankYou = page.locator('[data-test="complete-header"]');

  }

  //ovi lokatori svi su data-test, to je odlično, tako treba, naći neki unikatni locator da
    // bude sve isto

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }
}