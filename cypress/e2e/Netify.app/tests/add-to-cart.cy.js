
import ProductPurchase from "../components/add-to-cart.js"

describe('Shopping cart', ()=>{
    
    const cartUrl= "https://qa-practice.netlify.app/products_list"
    let shoppingCart= new ProductPurchase();
    let message= 'Congrats! Your order'

    beforeEach(()=>{
        cy.visit(cartUrl)
    })

    it('Verify Adding single item to the carts', ()=>{
        shoppingCart.addCartBtn() //Select one product and click add to cart button
        cy.scrollTo('top')
        cy.wait(4000)
    })

    it('verify adding multiple item to cart', ()=>{
        shoppingCart.addCartBtnClick(2) //Select multiple product and click add to cart button 
        cy.scrollTo('top')
        cy.wait(3000)
    })


    it('verify removing items from cart', ()=>{
        shoppingCart.addCartBtnClick(2)  //Selct multiple product and click add to cart button
        cy.scrollTo('top')
        cy.wait(3000)

        shoppingCart.clickRemoveBtn(2)  //Remove the selected product 
        cy.scrollTo('top')
        cy.wait(3000)

    })

    it('verify purchasing from selected cart', ()=>{
        shoppingCart.addCartBtnClick(3) // Select multiple product and click add to cart 
        cy.scrollTo('top')
        cy.wait(3000)

        shoppingCart.clickPurchaseBtn()  // Click Purchase button
        shoppingCart.confirmPurchaseSuccess(message)   // Verify the sucess message 
        
    })

    

    
})