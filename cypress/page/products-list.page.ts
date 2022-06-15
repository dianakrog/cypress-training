class TShirtsPage {
  private sectionProductOne: string;  
  private btnAddCartProductOne: string;
  private btnProceedCheckout: string;
  
  constructor() {
    this.sectionProductOne = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default"
    this.btnAddCartProductOne = "[style*='display: block;'] .button-container > a";
    this.btnProceedCheckout = ".cart_navigation span";
  }
  
    public addCartProductOne(): void {
      cy.get(this.sectionProductOne).click();
      cy.get(this.btnAddCartProductOne).click();
    }
  
    public proceedCheckout(): void {
      cy.get(this.btnProceedCheckout).click();
    }
  }
  
  export {TShirtsPage};
