describe('g70wiki', function () {
  it('.should() - assert that <title> is correct', function () {
    // https://on.cypress.io/visit
    cy.visit('hulking-apparel.surge.sh')
    cy.title().should('include', 'g70wiki')
  })
})