export class MainPage {

    static openAutomationPracticePage() {

        cy.visit("http://automationpractice.com/index.php");

    }



    static clickCategory(name) {

        cy.get('#block_top_menu').contains(name).click();

    }



    static clickShoppingCart() {

        cy.get('.shopping_cart').contains("Cart").click();

    }

    static clickLogin() {
        cy.get('.login').contains("Sign in").click();
        cy.get('#email').type("bkuziemski@deloittece.com")
        cy.get('#passwd').type("12345")
        cy.get('#SubmitLogin').click()
        cy.url().should('eq', 'http://automationpractice.com/index.php?controller=my-account')
    }

    static checkManyAccounts(email, password) {        
        cy.get('.login').contains("Sign in").click();
        cy.get('#email').type(email)
        cy.get('#passwd').type(password)
        cy.get('#SubmitLogin').click()
        cy.url().should('eq', 'http://automationpractice.com/index.php?controller=my-account')
    }

    static signOut() {
        cy.get('.logout').contains("Sign out").click();
    }

    static continueShopping() {
        cy.wait(9500);
        cy.get('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > span > span').click();
    }

    static addToCart(id, name) {
        cy.get('#block_top_menu > ul > li:nth-child(2) > a').click();        
        cy.get(id).click();
    }

}