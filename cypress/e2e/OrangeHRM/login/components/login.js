
class HRMLogin
{

    constructor(){
        this.userNameFieldLocator= "input[placeholder='Username']"
        this.passwordFiledLocator= "input[placeholder='Password']"
        this.submitButtonLocator= "button[type='submit']"
        this.invalidMsgLocator=".oxd-alert-content > .oxd-text"
        this.validationMsgLocator= ".oxd-input-group > .oxd-text"

    }

    enterUserName(username)
    {
        cy.get(this.userNameFieldLocator).type(username)
        cy.wait(3000)
    }

    enterPassword(password)
    {
        cy.get(this.passwordFiledLocator).type(password)
        cy.wait(3000)
    }

    clickSubmit()
    {
        cy.get(this.submitButtonLocator).click()
        cy.wait(3000)
    }

    verifyInvalidMsg(errormessage)
    {
        cy.get(this.invalidMsgLocator)
        .should('have.text', errormessage)
    }

    verifyValidationMsg(number, message)
    {
        cy.get(this.validationMsgLocator)
        .eq(number)
        .should('have.text', message)
    }


}
export default HRMLogin