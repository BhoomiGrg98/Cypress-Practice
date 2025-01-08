import HRMLogin from "../components/login.js"

describe('Login Test Case', ()=>{

    let url= 'https://opensource-demo.orangehrmlive.com/web/auth/login'
    let HRMauth= new HRMLogin()
    beforeEach(()=>{
        cy.visit(url)
    })


    it('Verify successful login', ()=>{
        //Step1: Enter valid username
        //Step2: Enter valid Password
        //Step3: Click Submit button  
        cy.fixture('login-data').then((data)=>{
            HRMauth.enterUserName(data.validUsername)        
            HRMauth.enterPassword(data.validPassword)  
            HRMauth.clickSubmit()  
        })
                          
    })

    it('Verify invalid username and password', ()=>{

        //Step1.1: Enter invalid username
        //Step1.2: Enter valid password 
        //Step1.3 Click Submit button 
        //Step1.4: Verify error message
        cy.fixture('login-data').then((data)=>{
            HRMauth.enterUserName(data.invalidUsername)        
            HRMauth.enterPassword(data.validPassword) 
            HRMauth.clickSubmit()   
            HRMauth.verifyInvalidMsg(data.errormessage)  
        })     
                  
        //Step2.1: Enter valid username
        //Step2.2: Enter invalid password
        //Step2.3: Click submit button
        //Step2.4:Verify error message  
        cy.fixture('login-data').then((data)=>{
            HRMauth.enterUserName(data.validUsername)       
            HRMauth.enterPassword(data.invalidPassword)             
            HRMauth.clickSubmit()    
            HRMauth.verifyInvalidMsg(data.errormessage)     
        })
    })

    it('Verify Empty username and password', ()=>{

        //Step1: Click submit button
        //Step2: Verify validation message for user
        //Step3: Verify validation message for password 
        cy.fixture('login-data').then((data)=>{
            HRMauth.clickSubmit()    
            HRMauth.verifyValidationMsg(1, data.validationMsg) 
        })           

    })  



})