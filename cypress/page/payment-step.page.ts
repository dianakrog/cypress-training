class PaymentPage {
    private btnConfirmOrder: string;  
    private btnPayByBank: string;
    
    constructor() {
        this.btnPayByBank = "#HOOK_PAYMENT > div:nth-child(1) > div > p > a"
        this.btnConfirmOrder = "#cart_navigation > button";        
      }
    
      public slectPayMethod(): void {
        cy.get(this.btnPayByBank).click();
      }

      public confirmOrder(): void {
        cy.get(this.btnConfirmOrder).click();
      }

    }
    
    export {PaymentPage};
