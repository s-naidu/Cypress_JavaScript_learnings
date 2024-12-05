describe('Automation - Working With Links', function () {
  it('Cypress Test Case - Understanding Links and how to work with Links', function () {


    cy.visit('https://www.wikipedia.org/');
    cy.get('a').contains('Wikifunctions').click();
    cy.origin('https://www.wikifunctions.org/', () => {
      //Verify Url after navigating diferent origin
      cy.url().should("eq", "https://www.wikifunctions.org/wiki/Wikifunctions:Main_Page")
      cy.get('#Welcome_to_Wikifunctions').should('contain.text', 'Wikifunctions');

      //Verify links count in a Page
      cy.get('a').should('have.length', 135)
      cy.get('a').its('length').then((elelength) => {
        var lengthcount = elelength
        cy.log(lengthcount)
        expect(lengthcount).to.equal(135)
      })
      // cy.get('.vector-menu-content:visible').eq(8).find('a').its('length').then((elelength) => {
      //   cy.log(elelength)
      //   expect(elelength).to.equal(8)
      // })

      //Get the Link Text
      // cy.get('.vector-menu-content').eq(8).find('a').then((txt) => {
      //   var x = txt.text()
      //   cy.log(x)
      // })
    })
  })
})