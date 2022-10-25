import {
  MenuContentPage,
  ProductsListPage,
  ShopingCartPage,
  SignInPage,
  AddressPage,
  ShippingPage,
  PaymentPage,
} from "../page/index";

const menuContentPage = new MenuContentPage();
const productsListPage = new ProductsListPage();
const shopingCartPage = new ShopingCartPage();
const signInPage = new SignInPage();
const adressPage = new AddressPage();
const shippingPage = new ShippingPage();
const paymentPage = new PaymentPage();

let email: string;
let passwd: string;
let orderMessage: string;

describe("Buy a t-shirt", () => {
  before(() => {
    email = "aperdomobo@gmail.com";
    passwd = "WorkshopProtractor";
    orderMessage = "Your order on My Store is complete.";
    menuContentPage.visitMenuContentPage();
  });

  it("then should be bought a t-shirt", () => {
    menuContentPage.goToTShirtMenu();
    productsListPage.addCartProductOne();
    shopingCartPage.proceedCheckout();
    signInPage.signIn(email, passwd);
    adressPage.proceedCheckout();
    shippingPage.acceptTermsService();
    shippingPage.proceedCheckout();
    paymentPage.selectPaymentMethod();
    paymentPage.confirmOrder();
    paymentPage.verifyOrderMessage(orderMessage);
  });
});
