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

    static addToCart() {
        cy.get('#homefeatured > li.ajax_block_product.col-xs-12.col-sm-4.col-md-3.first-in-line.first-item-of-tablet-line.first-item-of-mobile-line > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default').click();
        // cy.get('#layer_cart_product_price').invoke('text').as('storedValue')
        // let price1 = this.storedValue;
        // cy.log(price1);
        // cy.get('@storedValue').then((storedValue) => {
        //   //Access storedValue here
        //   cy.log(storedValue) //prints value
        // })

        let storedValue
        cy.get('#layer_cart_product_price')
        .invoke('text')
        .then((text) => {
            storedValue = text
        })


    }

    //http://automationpractice.com/index.php?controller=my-account

}