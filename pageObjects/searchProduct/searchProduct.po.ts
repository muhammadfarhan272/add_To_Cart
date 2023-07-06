import { ISearchProduct } from "./searchProduct.in";

export class SearchProduct implements ISearchProduct{
    private searchSelector = ".search-keyword";
    private productIncreament = ".increment";
    private productQuantity = ".quantity";
    
    searchProduct(product:string){
        return cy.get(this.searchSelector).type(product)
    }
    getCardProductQuantity() {
        /*This can call from isNameMatch() of addToCart.po.ts file */
        cy.get(this.productQuantity).invoke("text").as("TotalQuantityOnSearchCard")
    }
    
    incrementByPlus(){
        const element = cy.get(this.productIncreament);
        
        for(let i = 0;i<4;i++){
            cy.wait(1000)
            element.click({ multiple: true ,force: true})
        }

    }
}