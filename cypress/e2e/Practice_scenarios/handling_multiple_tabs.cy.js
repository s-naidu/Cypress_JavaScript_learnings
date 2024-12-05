describe('Example to demonstrate the handling of new browser windows in cypress', () => {

  it('Handling new Browser Tab', function () {
    cy.visit('https://the-internet.herokuapp.com/windows')
    cy.get('.example > a').invoke('removeAttr', 'target').click()
    cy.url()
      .should('include', '/windows/new')
    cy.get('h3')
      .should('have.text', 'New Window')
  })

  it.skip('Handling New Window', function () {
    cy.visit('https://alapanme.github.io/testing-cypress.html');
    const newUrl = "http://the-internet.herokuapp.com";

    cy.window().then(win => {
      cy.wrap(win, 'open').as('windowOpen');
    });
    cy.get('button').click();
    cy.get('@windowOpen').should('be.calledWith', newUrl);
    cy.window().then(win => {
      win.location.href = newUrl;
    });
    cy.get('h1').should('contain', 'Welcome to the-internet');
  })
})