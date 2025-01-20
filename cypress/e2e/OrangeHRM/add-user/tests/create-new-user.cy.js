import { login } from "../../helper/helper.js"
import newUser from "../components/create-new-user.js"

describe ('Add user Test Case', ()=>{

  let urlData= "https://opensource-demo.orangehrmlive.com/web/auth/login"
  let addNewUser = new newUser()
  let messageValid= "Required"

  beforeEach(()=>{

    cy.visit(urlData)
    login()
    cy.wait(2000)
    addNewUser.clickAdmin()
    addNewUser.clickAddBtn()

    //login
    //Click Admin
    //Click Add Button

  })


  it('Verify submission with empty data', ()=>{
      
    addNewUser.clickSaveBtn()
    cy.wait(2000)
    addNewUser.verifyValidationMsg(3, messageValid)
      //Click save button Without entering 
      //Check the validation message for required fields 
      
    })

    it('Verify new user created sucessfully', ()=>{
        cy.fixture('userdetails.json').then((data)=>{
          addNewUser.selectUserRole()
          addNewUser.selectEmployee('T')
          addNewUser.selectStatus()
          addNewUser.enterUsername(data.user)
          addNewUser.enterPassword(data.pass)
          addNewUser.enterConfirmPassword(data.pass)
          addNewUser.clickSaveBtn()

          //Enter valid data in the fields 
          //Click Save 
        })
    })

    it('Verify submission with invalid data', ()=>{
      cy.fixture('userdetails.json').then((data)=>{
        
        addNewUser.enterUsername(data.invUser)
        addNewUser.enterPassword(data.invPass)
        addNewUser.enterConfirmPassword(data.passMismatch)
        addNewUser.enterEmployee('T')
        addNewUser.clickSaveBtn()
        addNewUser.errMsgUser(data.invUserMsg)
        addNewUser.errMsgPass(data.invPassMsg)
        addNewUser.errMismatchMsg(data.misMatchPass)
        addNewUser.errEmployeeMsg(data.invEmpMsg)

        //Enter invalid data in fields 
        //Click Save 
        //Check validation Message

      })
    })
})