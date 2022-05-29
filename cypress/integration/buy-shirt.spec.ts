import { MenuContentPage } from "../page/menu-content.page";
import { TShirtsPage } from "../page/t-shirts.page";
import { SignInPage } from "../page/sign-in.page";
import { AddressPage } from "../page/address.page";
import { ShippingPage } from "../page/shipping.page";
import { PaymentPage } from "../page/payment-step.page";

const menuContentPage = new MenuContentPage();
const tShirtsPage = new TShirtsPage();
const signInPage = new SignInPage();
const adressPage = new AddressPage();
const shippingPage = new ShippingPage();
const paymentPage = new PaymentPage();

const email = 'aperdomobo@gmail.com';
const passwd = 'WorkshopProtractor';


describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();

    tShirtsPage.addCartProductOne();
    tShirtsPage.proceedCheckout();

    signInPage.signIn(email, passwd);        

    adressPage.proceedCheckout();

    shippingPage.acceptTermsService();
    shippingPage.proceedCheckout();

    paymentPage.slectPayMethod();
    paymentPage.confirmOrder();
    
    cy.get("#center_column > div > p > strong")
        .should("have.text", "Your order on My Store is complete.");
  });
});
