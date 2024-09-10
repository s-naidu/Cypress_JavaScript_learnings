describe('RBI project Tutorial Test', function () {
    // test case
    it('Test Case6', function () {
        //file to be uploaded path in project folder
        const p = 'bitbucket.png'
        // launch URL
        cy.visit("https://the-internet.herokuapp.com/upload")
        //upload file with attachFile 
        cy.get('#file-upload').attachFile(p)
        //click on upload
        cy.get('#file-submit').click()
        //verify uploaded file
        //cy.wait(5000)
        cy.get('#uploaded-files').contains('bitbucket')
    });
});
