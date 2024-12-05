describe('language test', () => {
    it('language detect test', () => {
        cy.visit('https://translate.google.com/')
        cy.get('.VfPpkd-YVzG2b').should('be.visible')
        cy.get('.er8xn').type('como')
        cy.wait(4000)
        // cy.get('.VfPpkd-AznF2e-LUERP-bN97Pc').each(($el)=>{

        //     cy.wrap($el)
        //     .invoke('text')
        //     .then((text) => {
        //       cy.log(text.trim()); // Log each language
        //       console.log(text.trim()); // Print to console
        //     });
        // })
        cy.get('.VfPpkd-AznF2e-LUERP-bN97Pc').eq(0).then(($el) => {
            // Wrap each element and invoke the text method
            //cy.wrap($el).invoke('text').then((text) => {
                cy.log($el.first().text().trim()); // Log each language in Cypress
                //console.log(text); // Log each language in the browser console
             // });
            // languages=[]
          });
        
    })
})

// describe('Google Translate Detect Languages Tab', () => {
//   it('should print all languages under the Detect Languages tab', () => {
//     // Visit Google Translate
//     cy.visit('https://translate.google.com');

//     // Click on the source language dropdown
//     //cy.get('[aria-label="More source languages"]').click();

//     // Wait for the dropdown to appear
//     cy.get('.VfPpkd-AznF2e-LUERP-bN97Pc').should('be.visible');

//     // Extract and print all languages
//    // cy.get('.VfPpkd-AznF2e-LUERP-bN97Pc').each(() => {
//       // Grab all language names
//       cy.get('.VfPpkd-AznF2e-LUERP-bN97Pc').each(($el) => {
//         cy.wrap($el)
//           .invoke('text')
//           .then((text) => {
//             cy.log(text.trim()); // Log each language
//             console.log(text.trim()); // Print to console
//           });
//       });
//     //});
//   });
// });
