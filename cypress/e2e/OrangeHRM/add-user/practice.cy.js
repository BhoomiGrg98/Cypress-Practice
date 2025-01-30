describe('Add user', ()=>{

    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/auth/login')
        cy.get("input[placeholder='Username']").type('admin')
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.get("aside[class='oxd-sidepanel'] li:nth-child(1)").click()
        cy.wait(3000)

    })
    it.skip('Verify submission with empty data',()=>{
        cy.xpath("//button[normalize-space()='Add']").click()

        cy.get('.oxd-button--secondary').click()
        cy.wait(3000)

        // cy.get('div.oxd-form-row > div > div:nth-child(4) span').should('have.text', 'Required')

        
        function verifyValidationMessage(locator, number, message)
        {
        cy.get(locator)
        .wait(2000)
           .eq(number)
           .should('have.text', message)
        }
        let locator= ".oxd-input-group > .oxd-text"
        console.log(locator)

        // cy.get('.oxd-input-group > .oxd-text').eq(4)
        // .should('have.text', 'Required')

        for (let i = 0; i <= 4; i++) {
             verifyValidationMessage(locator, i, 'Required');
        }
        cy.wait(2000)
       cy.xpath("//span[normalize-space()='Passwords do not match']").should('have.text', 'Passwords do not match')

        // verifyValidationMessage(".oxd-input-group > .oxd-text", 4, 'Required')
        //  verifyValidationMessage('div.oxd-form-row > div > div span', 2,  'Required')
        //   verifyValidationMessage('div.oxd-form-row > div > div span', 3, 'Required')
        //    verifyValidationMessage('div.oxd-form-row > div > div span', 4, 'Required')
        

    })

    it.skip('Verfiy submission with invalid data ', ()=>{
        cy.xpath("//button[normalize-space()='Add']").click()
    //     function generateRandom(length)
    //     {
    //     const chars= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    //     return Array.from({length}, ()=>chars.charAt(Math.floor(Math.random()* chars.length))).join('')
    //      }
    //     const randomUsers = Array.from({ length: 3 }, (_, i) => ({
    //   username: `user${i + 1}`,
    //   password: generateRandom(8),
    //     }));
    //     randomUsers.forEach((user)=>{
    //       cy.wait(2000)
        cy.get("input[placeholder='Type for hints...']").type("e")
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('test')
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type("2333")
        // cy.get('span:contains("Should be at least 5 characters")').should('have.text', 'Should be at least 5 characters')
        // cy.get('span:contains("Should have at least 7 characters")').should('have.text', 'Should have at least 7 characters')
        // cy.get('span:contains("Invalid")').should('have.text', 'Invalid')


    })

      
    })
    it('verify new user created sucessfully   ', ()=>{

        cy.xpath("//button[normalize-space()='Add']").click()
       const userRole =  cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper')
       userRole.click()

    //    cy.document().then((doc)=>{
    //     const selectDropdown = doc.querySelector('.oxd-select-dropdown')
    //     // const options = selectDropdown.querySelectorAll(".oxd-select-option")
    //     console.log('selectDropdown',selectDropdown)
    //     // console.log('options',options)
    //    })

        // cy.get('div.oxd-select-option:contains("Admin")').click()
        // cy.wait(3000)

        // cy.get('.oxd-autocomplete-text-input > input')
        // .type('T')
        // .wait(3000)
        // .type('{downArrow}')
        // .type('{enter}')

        // cy.wait(3000)



        // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()

        // cy.document().then((doc)=>{

        //     const dropdown= doc.querySelector('[role="listbox"]')
        //     console.log("status dropdown", dropdown)
            

        // })
        // cy.get('div.oxd-select-option:contains("Enabled")').click()

        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Micheal')
            //    .type('Test!@344')
        // .type('{selectall}')
        // .trigger('keydown', { ctrlKey: true, key: 'c' })
    //    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input')
    //    .type('Test!@344')
    //     .type('{selectall}')
    //     .trigger('keydown', { ctrlKey: true, key: 'c' })
    //     .type('{ctrl}c')
        
        // cy.window().then((win) => {
        //      win.navigator.clipboard.readText().then((text) => {
        //     expect(text).to.eq('Test!@344'); // Ensure clipboard contains the new value
        // });

        // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
        // .focus()
        // .wait(2000)
        // .trigger('keydown', { ctrlKey: true, key: 'v' })
        // .invoke('val', '') // Clear any existing value
 
        //  .trigger('paste');

        // cy.get('.oxd-button--secondary').click()
        
    })
})
// })