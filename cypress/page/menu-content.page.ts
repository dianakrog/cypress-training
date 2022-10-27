class MenuContentPage {
  private tShirtMenu: string;
  private tDressMenu: string;
  private menuContentPageURL: string;

  constructor() {
    this.menuContentPageURL = "http://automationpractice.com/";
    this.tDressMenu = '.sf-menu > :nth-child(2) > .sf-with-ul';
    this.tShirtMenu = 'li:nth-child(3) [title="T-shirts"]';
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
