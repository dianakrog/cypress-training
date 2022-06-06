class PaymentPage {
    private btnConfirmOrder: string;  
    private btnPayByBank: string;
    private txtVerifyOrder: string;
    
    constructor() {
        this.btnPayByBank = "#HOOK_PAYMENT > div:nth-child(1) > div > p > a"
        this.btnConfirmOrder = "#cart_navigation > button";
        this.txtVerifyOrder = "#center_column > div > p > strong";

      }
    
      public slectPayMethod(): void {
        cy.get(this.btnPayByBank).click();
      }

      public confirmOrder(): void {
        cy.get(this.btnConfirmOrder).click();
      }

      public verififyOrder(): void {
        const textOrder = cy.get(this.txtVerifyOrder)
          .should("have.text", "Your order on My Store is complete.");
      }

    }
    
    export {PaymentPage};
