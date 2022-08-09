export class MainPage {

    static openAutomationPracticePage() {
        cy.visit("http://automationpractice.com/index.php");
    }

    static clickSignIn() {
        cy.get('.login').contains("Sign in").click();
    }

    static setEmail(email) {
        cy.get('#email').type(email);
    }

    static setPassword(password) {
        cy.get('#passwd').type(password);
    }

    static clickSubmitLogin() {
        cy.get('#SubmitLogin').click();
    }

    static checkIfLogged(name) {   
        //cy.url().should('eq', 'http://automationpractice.com/index.php?controller=my-account');
        cy.get('.account > span').should("have.text", name);
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

    static clickProccedShopping() {
        cy.wait(6000);
        cy.get('.button-medium').contains("Proceed").click();
    }

}