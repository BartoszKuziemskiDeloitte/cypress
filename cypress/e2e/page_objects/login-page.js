export class LoginPage {

    static setEmail(email) {
        cy.get('#email').type(email);
    }

    static setPassword(password) {
        cy.get('#passwd').type(password);
    }

    static clickSubmitLogin() {
        cy.get('#SubmitLogin').click();
    }
    
}