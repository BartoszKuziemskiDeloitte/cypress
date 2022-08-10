/// <reference types="cypress" />
import { DressesPage } from "../page_objects/dresses-page";
import { LoginPage } from "../page_objects/login-page";
import { MainPage } from "../page_objects/main-page"

context('e-shop go to', () => {
    beforeEach(() => {
        MainPage.openAutomationPracticePage();
    })

    describe('menu bar', () => {

        it('should login all users from json', () => {
            var json = require('../../fixtures/users.json');
            json.forEach(element => {
                MainPage.clickSignIn();
                LoginPage.setEmail(element.email);
                LoginPage.setPassword(element.password);
                LoginPage.clickSubmitLogin();
                MainPage.checkIfLogged(element.name);
                MainPage.signOut();
            });
        })

        it('should add all products to cart', () => {
            var json = require('../../fixtures/products.json');
            let price = 0.0;
            json.forEach(element => {
                MainPage.openDressesCategory();
                DressesPage.addToCart(element.id);
                DressesPage.goToCart();
                price += element.price;
                let priceStr = "$" + price.toFixed(2);
                DressesPage.checkIfTotalPriceIsEqual(priceStr);
            })
        });

    })
})

