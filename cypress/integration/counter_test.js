describe('Counter', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('loads with 1 item in the basket, at price £12.99 on first render', () => {
    // cy.get('[data-cy="numberOfItems"]');
    // cy.contains('1');
    cy.get('[data-cy="amount"]');
    cy.contains('£12.99');
  });

  it('it zeroed the basket and total when clicked (-) once', () => {
    cy.get('[data-cy="minus"]').click();
    // cy.get('[data-cy="numberOfItems"]');
    // cy.contains('0');
    cy.get('[data-cy="amount"]');
    cy.contains('£0.00');
  });

  it('adds 2 items to the basket, (3 in total) at the total price of £38.97 when clicked (+) twice', () => {
    cy.get('[data-cy="plus"]')
      .click()
      .click();
    // cy.get('[data-cy="numberOfItems"]');
    // cy.contains('3');
    cy.get('[data-cy="amount"]');
    cy.contains('£38.97');
  });
});
