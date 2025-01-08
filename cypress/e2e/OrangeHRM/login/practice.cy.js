describe('ProductList', ()=>{
    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/auth/login')
        cy.wait(3000)

    })

    it.skip('Verify sucessful login ', ()=>{
      
    })

    it.skip('Verify invalid username and password', ()=>{
        cy.get("input[placeholder='Username']").type("232323")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.wait(3000)
        // cy.get('.oxd-alert-content > .oxd-text').contains('invalid credentials')
       cy.get('.oxd-alert-content > .oxd-text')
       .should('have.text', 'Invalid credentials')

        cy.get("input[placeholder='Username']").type("admin")
        cy.get("input[placeholder='Password']").type("wetwer")
        cy.get("button[type='submit']").click()
        cy.wait(3000)
        // cy.get('.oxd-alert-content > .oxd-text').contains('invalid credentials')

    })

    it('Verify Empty username and password', ()=>{
        cy.get("button[type='submit']").click()
        cy.wait(3000)

        cy.get(".oxd-input-group > .oxd-text")
        .eq(0)
        .should('have.text', 'Required')
        

    })



})