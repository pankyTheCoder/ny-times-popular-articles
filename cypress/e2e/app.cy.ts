describe('NY Times Articles App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the header properly', () => {
    cy.get('header').should('be.visible');
    cy.contains('NY Times Most Popular').should('be.visible');
  });

  it('shows article cards when data is loaded', () => {
    cy.get('body').then(($body) => {
      if ($body.find('[data-cy="article-card"]').length === 0) {
        cy.contains('Loading', { timeout: 10000 }).should('not.exist');
      }
    });
    
    cy.get('[data-cy="article-card"]').should('have.length.at.least', 1);
  });

  it('allows switching between time periods', () => {
    cy.contains('7 Days').click();
    cy.get('[aria-current="true"]').should('contain', '7 Days');
    
    cy.contains('30 Days').click();
    cy.get('[aria-current="true"]').should('contain', '30 Days');
  });

  it('navigates to article detail page', () => {
    cy.get('[data-cy="article-card"]').first().click();
    cy.url().should('include', '/article/');
    cy.contains('Read full article on NY Times').should('be.visible');
    cy.get('button[aria-label="Go back"]').should('be.visible').click();
    cy.url().should('not.include', '/article/');
  });
});
