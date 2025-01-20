export function dropdownSelect(locator, data)
{
   cy.get(locator)
    .type(data)
    .wait(3000)
    .type('{downArrow}')
    .type('{enter}')

}

export function login()
    {   
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()
    }

export function selectLocByIndex(locator, index, message)
    {
        cy.get(locator)
        .wait(3000)
        .eq(index)
        .should('have.text', message)
    }   
export function clickBtn(locator)
    {
        cy.get(locator).click()
    }
export function checkValidity(data)
    {
        cy.get('span')
        .contains(data)
        .should('have.text', data)
    }
