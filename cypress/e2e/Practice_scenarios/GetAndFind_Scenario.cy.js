describe('Tutorialspoint Test', function () {
   // test case
   it('Test Case1', function () {
      // test step to launch a URL
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
      // enter test in the edit box
      // assertion to validate the number of child elements
      cy.get('.product:visible').should('have.length', 30);
      // locate element with get and find method
      cy.get('.products').find('.product').each((el, index, value) => {
         cy.wrap(el.text())

      })
      //enter test in the edit box

   });
});


// Understanding ‘get’ and ‘find’: The get command in Cypress is used to select and yield DOM elements. It retrieves elements by CSS selector, DOM attributes, or other locators, and it returns a single element or an array of elements matching the selector. For instance:

// cy.get('.btn-primary').click();
// On the other hand, the find command is used to search for elements within a previously selected element. It's a way to narrow down the scope of element selection. For example:

// cy.get('.main-container').find('.article').click();