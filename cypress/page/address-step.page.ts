class AddressPage {
    private btnProceedCheckout: string;
  
    constructor() {
      this.btnProceedCheckout = "#center_column > form > p > button";
    }
  
    public proceedCheckout (): void {
        cy.get(this.btnProceedCheckout).click();
    }
}
  
  export {AddressPage};
