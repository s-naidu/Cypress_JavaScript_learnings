describe("amazon scenario", () => {

    it("amazon product list name and price scenario", () => {

        cy.visit("https://www.amazon.in/")
        cy.get("#twotabsearchtextbox").type("apple")
        cy.get('#nav-search-submit-button').click()
        cy.wait(3000)
        cy.get('.puisg-col-inner').find('span.a-size-medium.a-color-base.a-text-normal').then(($ele) => {
            let productname = $ele.text()
            cy.log(productname)

            cy.get('.puisg-col.puisg-col-4-of-12.puisg-col-8-of-16.puisg-col-12-of-20.puisg-col-12-of-24.puis-list-col-right').find('span.a-price-whole').then(($ele) => {
                let productrice = $ele.text()
                cy.log(productrice)

            })
        })
    })
})
