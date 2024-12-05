describe('RBI project Tutorial Test', function () {
    //part of before hook 
    before(function () {
        //access fixture data 
        cy.fixture('example').then(function (signInData) {
            this.signInData = signInData
        })
    })
    // test case
    it('Test Case1', function () {
        // launch URL 
        cy.visit("https://www.linkedin.com/")
        //data driven from fixture 
        cy.get('.nav__button-secondary').click()
        cy.wait(3000)
        cy.get('#username').type(this.signInData.email)
        cy.get('input[name="session_password"]').type(this.signInData.password)
    });
});
