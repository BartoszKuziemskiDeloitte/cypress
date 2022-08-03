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

        // it('should login all users from json', () => {
        //     var json = require('../resource/users.json'); //with path
        //     for(let i = 0; i < json.length; i++) {
        //         var email = json[i].email;
        //         var password = json[i].password;
        //         MainPage.checkManyAccounts(email, password);
        //         MainPage.signOut();
        //     }

        // })

        it('add to cart', () => {
            MainPage.addToCart();
        })

    })
})

