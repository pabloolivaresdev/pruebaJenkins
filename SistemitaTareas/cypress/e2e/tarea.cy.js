describe('Tareas App', () => {
   it('Debería mostrar la lista de tareas', () => {
      cy.visit('http://localhost:4200');
     cy.contains('Aprender NUnit').should('be.visible');
   });
 
   it('Debería agregar una nueva tarea', () => {
      cy.visit('http://localhost:4200');
     cy.get('#inputTitulo').type('Nueva Tarea XD');
     cy.get('#checkBox').click();
     cy.get('button').click();
     cy.contains('Nueva Tarea XD').should('be.visible');
   });
 });
 