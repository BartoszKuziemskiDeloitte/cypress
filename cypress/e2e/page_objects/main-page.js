export class MainPage {

    static openAutomationPracticePage() {
        cy.visit("http://automationpractice.com/index.php");
    }

    static clickSignIn() {
        cy.get('.login').contains("Sign in").click();
    }

    static checkIfLogged(name) {   
        cy.get('.account > span').should("have.text", name);
    }

    static signOut() {
        cy.get('.logout').contains("Sign out").click();
    }

    static openDressesCategory() {
        cy.get('#block_top_menu').contains("Dresses").click({force: true});
    }

}