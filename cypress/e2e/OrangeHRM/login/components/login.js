import { selectLocByIndex } from "../../helper/helper"
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
        cy.wait(2000)
    }

    enterPassword(password)
    {
        cy.get(this.passwordFiledLocator).type(password)
        cy.wait(2000)
    }

    clickSubmit()
    {
        cy.get(this.submitButtonLocator).click()
        cy.wait(2000)
    }

    verifyInvalidMsg(errormessage)
    {
        cy.get(this.invalidMsgLocator)
        .should('have.text', errormessage)
    }

    verifyValidationMsg(index, message)
    {
        for (let i = 0; i <= index; i++) {
            selectLocByIndex(this.validationMsgLocator,i,  message)
        }
    }


}
export default HRMLogin