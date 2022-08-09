/// <reference types="cypress" />
import { MainPage } from "../page_objects/main-page"
//import {WomenPage} from "../page_objects/women-page"
//import {ShoppingCart} from "../page_objects/shopping_cart-page"

context('e-shop go to', () => {
    beforeEach(() => {
        MainPage.openAutomationPracticePage();
    })

    describe('menu bar', () => {

        // it('should open category: Women', () => {
        //     MainPage.clickCategory('Women');
        //     //    WomenPage.checkIfWomenCategoryisOpen();      
        // })

        // it('should open cart page', () => {
        //     MainPage.clickShoppingCart();
        //     //     ShoppingCart.checkIfShoppingCartisOpen();        
        // })

        // it('should open login page', () => {
        //     MainPage.clickLogin();
        // })

        it('should login all users from json', () => {
            var json = require('../../fixtures/users.json');
            json.forEach(element => {
                MainPage.checkManyAccounts(element.email, element.password);
                MainPage.signOut();
            });
        })

        it('should add all products to cart', () => {
            var json = require('../../fixtures/products.json');
            json.forEach(element => {
                MainPage.addToCart(element.id, element.name);
                MainPage.continueShopping();
            })
        });

    })
})

