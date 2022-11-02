class ShopingCartPage {
    private btnProceedCheckout: string;
    private btnProceedCheckoutSummary: string;
    
    constructor() {
      this.btnProceedCheckout = "a.btn.btn-default.button.button-medium";
      this.btnProceedCheckoutSummary = ".cart_navigation > .button > span";
    }
    
      public proceedCheckout(): void {
        cy.get(this.btnProceedCheckout).click();
        cy.get(this.btnProceedCheckoutSummary).click();
      }
    }
    
    export {ShopingCartPage};
