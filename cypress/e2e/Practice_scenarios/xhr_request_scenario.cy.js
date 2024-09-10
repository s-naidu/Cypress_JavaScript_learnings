const { describe } = require("mocha")

describe('xhr scenario', () => {

    it('xhr test example', () => {
        cy.request('https://jsonplaceholder.cypress.io/comments').as('c')
        //aliasing request 
        cy.get('@c').should((response) => {
            expect(response.body).to.have.length(500)
            expect(response).to.have.property('headers')
        })
    })

})


