describe('Visible elements test', () => {
    it('Checking visible elements test', () => {
        cy.visit('https://www.amazon.in/')
        cy.get('.nav-line-1.nav-progressive-content')
    })
})