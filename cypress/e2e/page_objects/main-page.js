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
        cy.get('.account > span').should("have.text", name);
    }

    static signOut() {
        cy.get('.logout').contains("Sign out").click();
    }

    static goToCart() {
        cy.wait(5000);
        cy.get('.button-medium').contains("Proceed").click();
    }

    static addToCart(id) {
        cy.get(id).click();
    }

    static openDressesCategory() {
        cy.get('#block_top_menu').contains("Dresses").click({force: true});
    }

    static checkIfTotalPriceIsEqual(price) {
        let total = cy.get('#total_product').invoke('text').should('eq', price);
    }

}