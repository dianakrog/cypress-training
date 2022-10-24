class ProductsListPage {
  private sectionProductOne: string;  
  private btnAddCartProductOne: string;
  
  constructor() {
    this.sectionProductOne = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default"
    this.btnAddCartProductOne = "[style*='display: block;'] .button-container > a";
  }
  
    public addCartProductOne(): void {
      cy.get(this.sectionProductOne).click();
      cy.get(this.btnAddCartProductOne).click();
    }
  
  }
  
  export {ProductsListPage};
