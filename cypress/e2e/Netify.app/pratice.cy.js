

describe('ProductList', ()=>{
    beforeEach(()=>{
        cy.visit('https://qa-practice.netlify.app/products_list')

    })

    it.skip('Verify Adding single item to the carts', ()=>{
        cy.xpath('//*[@id="prooood"]/section[2]/div/div[2]//button').click()  
        cy.wait(6000)              
    })

    it.skip('verify adding multiple item to cart', ()=>{
        cy.xpath('//*[@id="prooood"]/section[2]/div//div[@class="shop-item"]//button').each(($el, index) =>{
            if(index<2){
                cy.wrap($el).click()
                cy.wait(3000)
            }            
        })

    })

    it.skip('verify removing items from cart', ()=>{
        cy.xpath('//*[@id="prooood"]/section[2]/div//div[@class="shop-item"]//button').each(($el, index) =>{
            if(index<2){
                cy.wrap($el).click()
                cy.wait(3000)
            }            
        })
        cy.xpath('//*[@id="prooood"]/section[1]/div//div[@class="cart-row"]//button').each(($el, index) =>{
            if(index<2){
                cy.wrap($el).click()
                cy.wait(3000)
            }          
        })

    })

    it('verify purchasing from selected cart', ()=>{
        cy.xpath('//*[@id="prooood"]/section[2]/div//div[@class="shop-item"]//button').each(($el, index) =>{
            if(index<2){
                cy.wrap($el).click()
                cy.wait(3000)
            } 
        })    
            
        // cy.xpath('//*[@id="prooood"]/section[1]/div[2]/div/span').each(($el, index) =>{
        //     if(index<2){
        //         cy.wrap($el).click()
        //         cy.wait(3000)
        //     }
             
        // })

        function addvalues(xpath){
            cy.xpath(xpath).each(($el) => {
                cy.wrap($el).invoke('text').then((text) =>{
                    const value= parseFloat(text.trim())
                    totalsum += value
                    return totalsum
                })
            })
        }

        let totalsum= 0
        const xpath1= '//*[@id="prooood"]/section[1]/div[2]/div[1]/span'
        const xpath2= '//*[@id="prooood"]/section[1]/div[2]/div[2]/span'

        let priceOne= addvalues(xpath1)
        let priceTwo= addvalues(xpath2)
        let total= priceOne+priceTwo


        // cy.then(() =>{
        //     const expectedTotal= cy.xpath("").
        //     expect(totalSum).to.eq(expectedTotal)
        // })

        //*[@id="prooood"]/section[1]/div[2]/div

        cy.xpath("//button[normalize-space()='PURCHASE']").click()
        cy.get("#message")
        .contains('Congrats! Your order of ')

        let totalcalcu= cy.get("div[id='message'] ")

        if(total== totalcalcu)
            cy.get('#back_to_prods_list').click()

       

    })


})
