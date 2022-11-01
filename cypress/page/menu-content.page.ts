class MenuContentPage {
  private tShirtMenu: string;
  private tDressMenu: string;
  private menuContentPageURL: string;

  constructor() {
    this.menuContentPageURL = "http://automationpractice.com/";
    this.tDressMenu = '#block_top_menu > ul > li > a[title="Dresses"]';
    this.tShirtMenu = '#block_top_menu > ul > li > a[title="T-shirts"]';
  }

  public visitMenuContentPage(): void {
    cy.visit(this.menuContentPageURL);
  }

  public goToTShirtMenu(): void {
    cy.get(this.tShirtMenu).click();
  }

  public visitMenuDressPage(): void {
    cy.get(this.tDressMenu).click();
  }

}

export {MenuContentPage};
