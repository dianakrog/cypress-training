class MenuContentPage {
  private tShirtMenu: string;
  private tDressMenu: string;
  private menuContentPageURL: string;

  constructor() {
    this.menuContentPageURL = "http://automationpractice.com/";
    this.tDressMenu = "#block_top_menu > ul > li:nth-child(2) > a";
    this.tShirtMenu = "#block_top_menu > ul > li:nth-child(3) > a";
    
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
