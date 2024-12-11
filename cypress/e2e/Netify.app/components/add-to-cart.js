class ProductPurchase
{

    constructor(){
        this.addToCartBtnLoc= "//*[@id='prooood']/section[2]/div/div[2]//button"
        this.multiCartbtnLoc= '//*[@id="prooood"]/section[2]/div//div[@class="shop-item"]//button'
        this.removeBtnloc= '//*[@id="prooood"]/section[1]/div//div[@class="cart-row"]//button'
        this.purchaseBtnLoc= "//button[normalize-space()='PURCHASE']"
        this.successMsgLocator='#message'

    }

    addCartBtn()
    {
      cy.xpath(this.addToCartBtnLoc).click()
    }

    clickMultiBtns(locators, number)
    {
        cy.xpath(locators).each(($el, index) =>{
            if(index<number){
                cy.wrap($el).click()
                cy.wait(3000)
            }
        }) 
    }

    addCartBtnClick(addnumber)
    {
        this.clickMultiBtns(this.multiCartbtnLoc, addnumber)
    }

    clickRemoveBtn(addnumber)
    {
        this.clickMultiBtns(this.removeBtnloc, addnumber)
    }

    clickPurchaseBtn()
    {
        cy.xpath(this.purchaseBtnLoc)
        .click()
    }

    confirmPurchaseSuccess(message)
    {
       cy.get(this.successMsgLocator)
       .contains(message)
    }

}

export default ProductPurchase