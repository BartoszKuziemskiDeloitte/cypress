/// <reference types="cypress" />
import { MainPage } from "../page_objects/main-page"
//import {WomenPage} from "../page_objects/women-page"
//import {ShoppingCart} from "../page_objects/shopping_cart-page"

context('e-shop go to', () => {
    beforeEach(() => {
        MainPage.openAutomationPracticePage();
    })

    describe('menu bar', () => {

        // it('should login all users from json', () => {
        //     var json = require('../../fixtures/users.json');
        //     json.forEach(element => {
        //         MainPage.clickSignIn();
        //         MainPage.setEmail(element.email);
        //         MainPage.setPassword(element.password);
        //         MainPage.clickSubmitLogin();
        //         MainPage.checkIfLogged(element.name);
        //         MainPage.signOut();
        //     });
        // })

        it('should add all products to cart', () => {
            var json = require('../../fixtures/products.json');
            json.forEach(element => {
                MainPage.openDressesCategory();
                MainPage.addToCart(element.id, element.name);
                MainPage.continueShopping();
            })
        });

    })
})

