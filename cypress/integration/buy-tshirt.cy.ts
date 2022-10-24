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

const email = "aperdomobo@gmail.com";
const passwd = "WorkshopProtractor";
const orderMessage = "Your order on My Store is complete."


describe("Buy a t-shirt", () => {
  it("then should be bought a t-shirt", () => {
    menuContentPage.visitMenuContentPage();
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
