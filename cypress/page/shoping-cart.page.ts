class ShopingCartPage {
    private btnProceedCheckout: string;
    
    constructor() {
      this.btnProceedCheckout = ".cart_navigation span";
    }
    
      public proceedCheckout(): void {
        cy.get(this.btnProceedCheckout).click();
      }
    }
    
    export {ShopingCartPage};
  