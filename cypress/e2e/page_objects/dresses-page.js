export class DressesPage {

    static goToCart() {
        cy.wait(5000);
        cy.get('.button-medium').contains("Proceed").click();
    }

    static addToCart(id) {
        cy.get(id).click();
    }

    static checkIfTotalPriceIsEqual(price) {
        let total = cy.get('#total_product').invoke('text').should('eq', price);
    }
}