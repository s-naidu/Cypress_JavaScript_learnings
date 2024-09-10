describe.skip('Automate AutoPract',()=>{
    before(() => {
        cy.visit('http://www.autopract.com/#/home/fashion')
        cy.get('.close').as('Popup')
        
    })
    beforeEach(()=> {
        cy.get('.bar-style').as('SideTab')
        cy.get('a').as('ATag')
    })

    it.skip('Should click POPUP',()=>{
        cy.get('@Popup').click()

    })
    it.skip('Verify Footwear Fashion',()=>{

        cy.get('@SideTab').click()
        
        cy.get('@ATag').contains(' footwear ').should('be.visible')
    })
    it.skip('Verify Watches Fashion', ()=> {
        cy.get('@ATag').contains(' watches ').should('be.visible')

    })
})