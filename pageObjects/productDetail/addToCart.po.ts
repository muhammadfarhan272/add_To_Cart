import { SearchProduct } from "../searchProduct/searchProduct.po";
import { IAddToCart } from "./addToCar.in";

export class AddToCart extends SearchProduct implements IAddToCart {
    
    private cartSelector = "ADD TO CART";
    private cartAtCorner = ".cart-icon";
    private totalQuantityOnCart = ".quantity";
    
    clickAddToCartBtn()
    {
        cy.contains(this.cartSelector).click()
    }
    getCart(){
        cy.get(this.cartAtCorner).click()
    }
    getTotalQuantityOnCart(){
        cy.get(this.totalQuantityOnCart).invoke("text").as("TotalQuantityOnCart")
    }
    isQuantityMatch(){
        this.getCardProductQuantity()
        cy.get("@TotalQuantityOnSearchCard").then((cardQuantity)=>{
            this.getTotalQuantityOnCart()
            cy.get("@TotalQuantityOnCart").then((addToCartQuantity)=>{
                expect(cardQuantity).to.deep.eq(addToCartQuantity)

            })

        })
    }
}