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

  })


  it('Verify submission with empty data', ()=>{
      addNewUser.clickSaveBtn()
      cy.wait(2000)
      addNewUser.verifyValidationMsg(4, messageValid)
      
  })

    // it.skip('Verify submission with empty data', ()=>{
    //     cy.fixture('create-user').then((users)=>{
    //         const selectedUser= users[[2]]

    //         addNewUser.selectUserRole()
    //         addNewUser.selectEmployee('As')
    //         addNewUser.selectStatus()
    //         addNewUser.enterUsername(selectedUser.username)
    //         addNewUser.enterPassword(selectedUser.password)
    //         addNewUser.enterConfirmPassword(selectedUser.username)

    //     })


    // })
})