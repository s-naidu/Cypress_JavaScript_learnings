describe('blur Command',()=>{
    before(() => {
        cy.visit('https://www.programsbuzz.com/user/login')
        
        })
        it('Type Username And Password',()=>{
            cy.get('form').first().within(()=>{
                cy.get('#edit-name').type('Rataalada')
                cy.focused()     
           })
        })
})