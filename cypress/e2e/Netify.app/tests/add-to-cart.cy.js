
import ProductPurchase from "../components/add-to-cart.js"

describe('Shopping cart', ()=>{
    
    const cartUrl= "https://qa-practice.netlify.app/products_list"
    let shoppingCart= new ProductPurchase();
    let message= 'Congrats! Your order'

    beforeEach(()=>{
        cy.visit(cartUrl)
    })

    it('Verify Adding single item to the carts', ()=>{
        shoppingCart.addCartBtn()
        cy.scrollTo('top')
        cy.wait(4000)
    })

    it('verify adding multiple item to cart', ()=>{
        shoppingCart.addCartBtnClick(2)
        cy.scrollTo('top')
        cy.wait(3000)
    })


    it('verify removing items from cart', ()=>{
        shoppingCart.addCartBtnClick(2)
        cy.scrollTo('top')
        cy.wait(3000)

        shoppingCart.clickRemoveBtn(2)
        cy.scrollTo('top')
        cy.wait(3000)

    })

    it('verify purchasing from selected cart', ()=>{
        shoppingCart.addCartBtnClick(3)
        cy.scrollTo('top')
        cy.wait(3000)

        shoppingCart.clickPurchaseBtn()
        shoppingCart.confirmPurchaseSuccess(message)
        
    })

    

    
})