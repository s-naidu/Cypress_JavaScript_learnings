describe('Amazon Product Search', () => {
  it('Fetches product names and prices from the search results page', () => {
    // Visit Amazon search results page
    //cy.visit('https://www.amazon.com/s?k=apple'); // Replace 'your-search-term'
    cy.visit("https://www.amazon.in/")
    cy.get("#twotabsearchtextbox").type("apple")
    cy.get('#nav-search-submit-button').click()
    cy.wait(3000)
    // Wait for the page to load fully
    //cy.wait(3000); // Adjust the wait time as necessary

    // Get product names and prices
    cy.get('.puisg-col-inner') // Selector for the list of search results
      .each(($el) => {
        const productName = $el.find('.a-size-medium.a-text-normal').text(); // Adjust selector for product name
        const productPrice = $el.find('.a-price-whole').text(); // Adjust selector for price
        const Ratings=$el.find('.a-size-base.s-underline-text').text()

        // Log product name and price
        if (productName && productPrice && Ratings) {
          cy.log(`Product: ${productName}, Price: ${productPrice},Ratings: ${Ratings}`);
         // cy.log(`Ratings: ${Ratings}`);
        }
      });
  });
});