describe('RBI project Tutorial Test', function () {
    it('Promise', function () {
        return cy.visit('https://google.com').then(() => {
            cy.wait(3000)
            return cy.get('.lnXdpd').should('be.visible')
        })
    })
})
