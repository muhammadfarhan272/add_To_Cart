///<reference types="cypress"/>
import { SearchProduct } from "../../pageObjects/searchProduct/searchProduct.po"
import { AddToCart } from "../../pageObjects/productDetail/addToCart.po";

let searchProduct : SearchProduct;
let addToCart : AddToCart;


describe("add to cart ",()=>{

  searchProduct = new SearchProduct();
  addToCart = new AddToCart();

   it("add to cart test",()=>{

    cy.visit(Cypress.env("base_url")).url().should("eq","https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.log("It is verified that we are reached successfully ");

    searchProduct.searchProduct("Capsicum");
    cy.log("Search for product 'Capsicum' successfully ");

    searchProduct.incrementByPlus();
    cy.log("Added 4 Capsicum in the cart by clicking on '+' sign successfully");

    addToCart.clickAddToCartBtn();
    cy.log("Click on add to cart button and product added to cart successfully");

    addToCart.getCart();
    cy.log("Click on cart icon in right upper corner successfully");

    addToCart.isQuantityMatch();

   })
})