import HRMLogin from "../components/login.js"

describe('', ()=>{

    let url= 'https://opensource-demo.orangehrmlive.com/web/auth/login'
    let username= "Admin"
    let password= "admin123"
    let message='Required'
    let errormessage= 'Invalid credentials'
    let HRMauth= new HRMLogin()
    beforeEach(()=>{
        cy.visit(url)
    })


    it('Verify successful login', ()=>{
        //Step1: Enter valid username
        HRMauth.enterUserName(username)

        //Step2: Enter valid Password           
        HRMauth.enterPassword(password)  

        //Step3: Click Submit button    
        HRMauth.clickSubmit()                    
    })

    it('Verify invalid username and password', ()=>{

        //Step1.1: Enter invalid username
        HRMauth.enterUserName("readmindss")         
        
        //Step1.2: Enter valid password 
        HRMauth.enterPassword(password) 

        //Step1.3 Click Submit button 
        HRMauth.clickSubmit()   

        //Step1.4: Verify error message
        HRMauth.verifyInvalidMsg(errormessage)       
                  
        //Step2.1: Enter valid username
        HRMauth.enterUserName(username)       

        //Step2.2: Enter invalid password
        HRMauth.enterPassword("12545")             
        
        //Step2.3: Click submit button
        HRMauth.clickSubmit()    

        //Step2.4:Verify error message 
        HRMauth.verifyInvalidMsg(errormessage)     
        
    })

    it('Verify Empty username and password', ()=>{

        //Step1: Click submit button
        HRMauth.clickSubmit()    
        
        //Step2: Verify validation message for username 
        HRMauth.verifyValidationMsg(0, message)      
        
        //Step3: Verify validation message for password 
        HRMauth.verifyValidationMsg(1, message)             

    })  



})