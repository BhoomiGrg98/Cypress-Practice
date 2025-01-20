
import { dropdownSelect, selectLocByIndex, clickBtn, checkValidity } from "../../helper/helper.js"

class newUser
{

    constructor(){
        this.adminLoc= "aside[class='oxd-sidepanel'] li:nth-child(1)"
        this.addBtnLoc= "//button[normalize-space()='Add']"
        this.saveBtnLoc= ".oxd-button--secondary"
        this.userRoleSelectLoc=":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper"
        this.selectUserRoleFromDropdown= 'div.oxd-select-option:contains("Admin")'
        this.employeeClickLoc=".oxd-autocomplete-text-input.oxd-autocomplete-text-input--active"
        this.employeeNameLoc=  ".oxd-autocomplete-text-input > input"
        this.statusLoc= ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
        this.selectStatusLoc= "div.oxd-select-option:contains('Enabled')"
        this.usernameLoc= ":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input"
        this.passwordLoc=".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input"
        this.confirmPassLoc=":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
        this.validationMsgLoc= ".oxd-input-group > .oxd-text"

    }

    clickAdmin()
    {
        cy.get(this.adminLoc)
        .click()
        .wait(2000)
    }

    clickAddBtn()
    {
        cy.xpath(this.addBtnLoc)
        .click()
        .wait(2000)
    }


    selectUserRole()
    {
        cy.get(this.userRoleSelectLoc)
        .click()
        cy.get(this.selectUserRoleFromDropdown)
        .click()

    }

    enterEmployee(data)
        {
            cy.get(this.employeeNameLoc)
            .wait(2000)
            .type(data)
        }

    selectEmployee(data)
        {   
            dropdownSelect(this.employeeNameLoc, data)
        }

    selectStatus()
        {
            cy.get(this.statusLoc)
             .click()
            cy.wait(2000)
            cy.get(this.selectStatusLoc).click()
        }

    enterUsername(data)
        {
            cy.get(this.usernameLoc)
            .wait(2000)
            .type(data)
        } 

    enterPassword(data)
        {
            cy.get(this.passwordLoc)
            .wait(2000)
            .type(data)
        }

    enterConfirmPassword(data)
        {
            cy.get(this.confirmPassLoc)
            .wait(2000)
            .type(data)
        }

    clickSaveBtn()
        {
            clickBtn(this.saveBtnLoc)
        }
    
    verifyValidationMsg(index, message)
    {
        for (let i = 0; i <= index; i++) {
            selectLocByIndex(this.validationMsgLoc,i,  message)
        }
    }

    checkErrorMsg(locator, message)
        {
            cy.get(locator).should('text', message)
        }
        
    errMsgUser(data)
        {
           checkValidity(data)
        }
     
    errMsgPass(data)
        {
           checkValidity(data)
             
        }
    
    errMismatchMsg(data)
        {
            checkValidity(data)
        }
    
    errEmployeeMsg(data)
        {
            checkValidity(data)
        }
    

} 
export default newUser
