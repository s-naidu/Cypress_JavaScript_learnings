/// <reference types="cypress"/>
describe('fixcture data scenario', function() {
    before(function () {
        //access fixture data 
        cy.fixture('example').then(function (signInData) {
            this.signInData = signInData
        })
    })


    it('Fixcture data accessing Testcase', function(){
        // launch URL
        cy.visit("https://register.rediff.com/register/register.php")
        //data driven from fixture
        cy.get(':nth-child(3) > [width="185"] > input')
            .type(this.signInData.fullName)
        cy.get('#mobno').type(this.signInData.number)
    });


})

