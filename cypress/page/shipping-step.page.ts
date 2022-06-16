class ShippingPage {
    private checkTermsService: string;
    private btnProceedCheckout: string;
  
    constructor() {
      this.checkTermsService = "#cgv";
      this.btnProceedCheckout = "#form > p > button";
    }
  
    public acceptTermsService (): void {
        cy.get(this.checkTermsService).click();
    }

    public proceedCheckout (): void {
        cy.get(this.btnProceedCheckout).click();
    }
}
  
  export {ShippingPage};
