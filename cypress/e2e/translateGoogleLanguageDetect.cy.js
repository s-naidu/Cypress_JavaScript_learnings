describe('Google Translate Detect Language Test', () => {
    it('should detect the entered language correctly', () => {
      let detectedLanguages = []; // Variable to store detected languages
  
      // Step 1: Open translate.google.com
      cy.visit('https://translate.google.com');
  
      // Step 2: Open the "Detect Languages" dropdown and store the languages
      cy.get('[aria-label="More source languages"]').eq(0).click();
      cy.get('.VfPpkd-AznF2e-LUERP-bN97Pc').first().each(() => {
        cy.get('.dykxn.MeCBDd.j33Gae').first().each(($el) => {
          cy.wrap($el).invoke('text').then((language) => {
              detectedLanguages.push(language.trim());
            });
        });
      });
      
      //
      // Step 3: Type "hello" into the text area
      cy.get('[aria-label="More source languages"]').eq(0).click();
      cy.get('textarea[aria-label="Source text"]').type('hello ');
      cy.wait(3000)
  
      // Step 4: Wait for the language detection
      cy.get('.VfPpkd-AznF2e-LUERP-bN97Pc').should('be.visible');
  
      // Step 5: Assert that the detected language matches "English"
      cy.get('.VfPpkd-AznF2e-LUERP-bN97Pc')
        .invoke('text')
        .then((detectedLanguage) => {
          expect(detectedLanguage.trim()).contains('English'); // Change "English" to match the expected detected language
          cy.log(`Detected language: ${detectedLanguage}`);
          cy.log(`Available languages: ${detectedLanguages.join(', ')}`);
        });
    });
  });
  


