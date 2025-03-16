describe('Forms test', () => {
    beforeEach(()=> {
        cy.visit('/forms')
      })
    it('Test form', () => {
        cy.contains(/Testing forms/i)
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
        cy.get('@subscribe-input').type('sharma.225403@gmail.com')
        cy.contains(/Successfully subbed: sharma.225403@gmail.com/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Successfully subbed: sharma.225403@gmail.com/i).should('exist')
        cy.wait(3000)
        cy.contains(/Successfully subbed: sharma.225403@gmail.com/i).should('not.exist')
        
        cy.get('@subscribe-input').type('sharma.225403@gmail.io')
        cy.contains(/Invalid email: sharma.225403@gmail.io/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Invalid email: sharma.225403@gmail.io/i).should('exist')

        cy.wait(3000)
        cy.contains(/fail!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/fail!/i).should('exist')
    })
})