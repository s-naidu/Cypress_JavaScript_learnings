// test suite describe('RBI project Tutorial', function () {
it('Scenario 1', function () {
    // test step to launch a URL 
    cy.visit("https://accounts.google.com")
    cy.wait(2000)
    // identify element
    cy.get('h1#headingText').find('span').should('have.text', 'Sign in')
    cy.get('h1#headingText').find('span').then(function (e) {
        const t = e.text()
        // get in Console 
        console.log(t)
    })
    // Console message 
    console.log("RBI project Tutorial-Cypress")
})

