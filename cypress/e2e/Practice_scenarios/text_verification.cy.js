// test suite 
describe('RBI project Tutorial', function () {
    // it function to identify test 
    it('Scenario 1', function () {
        // test step to launch a URL 
        cy.visit("https://accounts.google.com")
        // identify element
        cy.get('h1#headingText').find('span').then(function (e) {
            //method text to obtain text content 
            const t = e.text()
            cy.wait(2000)
            expect(t).to.contains('Sign')
        })
    })
})
