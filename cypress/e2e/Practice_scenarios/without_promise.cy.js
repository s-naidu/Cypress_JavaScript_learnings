describe('RBI project Tutorial Test', function () {
    it('Without Promise', function () {
        cy.visit('https://google.com')
        cy.wait(3000)
        cy.get('.lnXdpd').should('be.visible')

    })
})
