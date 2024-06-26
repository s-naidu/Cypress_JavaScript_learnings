describe('Visible elements test',()=>{
    it('Checking visible elements test',()=>{
        cy.visit('https://www.amazon.in/')
        cy.get('.nav-progressive-content a:visible').should('have.length',10)
    })
})