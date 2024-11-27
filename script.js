cy.get('.items')
  .trigger('mousedown', { which: 1, pageX: 493, pageY: 391 })
  .trigger('mousemove', { pageX: 271, pageY: 391 })
  .trigger('mouseup', { force: true });

// Allow some time for the scroll to happen and validate after
cy.get('.items')
  .invoke('scrollLeft')
  .should('be.gt', 0); // "gt" stands for "greater than"
