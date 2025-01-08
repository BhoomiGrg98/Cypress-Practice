

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

export function selectLocByIndex(locator, number, message)
{
    cy.get(locator)
    .wait(2000)
    .eq(number)
    .should('have.text', message)
}
