describe('Portfolio · main navigation', () => {
  it('starts on the "About" screen', () => {
    cy.visit('/');
    // The root route redirects to /about and shows the profile role.
    cy.contains('ion-title', 'About');
    cy.contains('Senior Software Engineer');
  });

  it('navigates to Projects from the tab bar', () => {
    cy.visit('/');
    cy.get('ion-tab-button[tab="projects"]').click();
    cy.contains('ion-title', 'Projects');
  });

  it('navigates to Tasks from the tab bar', () => {
    cy.visit('/');
    cy.get('ion-tab-button[tab="tasks"]').click();
    cy.contains('ion-title', 'Tasks');
  });
});
