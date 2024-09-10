describe('Example to demonstrate parent, parents and children commands in cypress', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get('form').submit()
    cy.title().should('eq', 'OrangeHRM')
    cy.wait(4000)
  })
  const data = ["Timesheet to Approve", "Pending Self Review", "Candidate to Interview"]

  it('Using parents and children', function () {
    cy.get('.orangehrm-todo-list').children().each((ele, index) => {
      cy.wrap(ele).children().last().should('contain', data[index])

    })
  })

  it('Using parent and children', function () {
    cy.title().should('eq', 'OrangeHRM')
  })
})