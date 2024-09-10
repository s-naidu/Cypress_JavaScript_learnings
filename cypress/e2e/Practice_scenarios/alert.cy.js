describe('RBI project Tutorial Test', function () {
    // test case
    it('Scenario 1', function () {

        // launch url 
        cy.visit("https://register.rediff.com/register/register.php");

        // click submit 
        cy.get('input[type="submit"]').click();
        // fire event with method on 
        cy.on('window:alert', (t) => {
            //assertions 
            expect(t).to.contains('Your full name cannot be blank.\nPlease enter your firstname and lastname e.g. Sameer Bhagwat');

        })

        cy.on('window:alert',(t1)=>{
            expect(t1).to.contains('Your full name')
        })

    });
})