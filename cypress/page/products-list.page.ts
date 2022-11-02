class ProductsListPage {
  private sectionProductOne: string;  
  private btnAddCartProductOne: string;
  private productElements: string;
  
  constructor() {
    this.sectionProductOne = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default"
    this.btnAddCartProductOne = ".ajax_add_to_cart_button > span";
    this.productElements = ".right-block";
  }
  
  public addTShirtToCart(product: string): void {
    this.findProductByName(product).find(this.btnAddCartProductOne).click();
    cy.get(this.btnAddCartProductOne).click();
  }

  private findProductByName(product: string) {
    return cy.get(this.productElements).filter(`:contains(${product})`);
  }
  
  }
  
  export {ProductsListPage};
