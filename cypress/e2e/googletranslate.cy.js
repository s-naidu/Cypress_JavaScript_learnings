describe('Print all languages from the Detect Language dropdown', () => {
  it('should print all available languages', () => {
    // Step 1: Visit Google Translate
    cy.visit('https://translate.google.com');

    // Step 2: Open the source language dropdown
    cy.get('[aria-label="More source languages"]').eq(0).click();

    // Step 3: Extract and print all languages
    cy.get('.VfPpkd-AznF2e-LUERP-bN97Pc').each(() => { // Adjust this selector based on the dropdown container
      cy.get('.dykxn.MeCBDd.j33Gae').each(($el, index) => { // Adjust based on individual language items
        cy.wrap($el)
          .invoke('text')
          .then((text) => {
            const language = text.trim();
            cy.log(`${index + 1}: ${language}`); // Log to Cypress Test Runner
            console.log(`${index + 1}: ${language}`); // Log to browser console
          });
      });
    });
  });
});
