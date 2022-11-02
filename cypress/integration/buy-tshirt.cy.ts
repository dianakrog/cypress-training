import {
  MenuContentPage,
  ProductsListPage,
  ShopingCartPage,
  SignInPage,
  AddressPage,
  ShippingPage,
  PaymentPage,
} from "../page/index";

describe("Buy a t-shirt", () => {
  let menuContentPage: MenuContentPage;
  let productsListPage: ProductsListPage;
  let shopingCartPage: ShopingCartPage;
  let signInPage: SignInPage;
  let adressPage: AddressPage;
  let shippingPage: ShippingPage;
  let paymentPage: PaymentPage;

  let email: string;
  let passwd: string;
  let orderMessage: string;
  let productToBuy: string;

  before(() => {
    menuContentPage = new MenuContentPage();
    menuContentPage = new MenuContentPage();
    productsListPage= new ProductsListPage();
    shopingCartPage= new ShopingCartPage();
    signInPage = new SignInPage();
    adressPage = new AddressPage();
    shippingPage = new ShippingPage();
    paymentPage = new PaymentPage();

    email = "aperdomobo@gmail.com";
    passwd = "WorkshopProtractor";
    orderMessage = "Your order on My Store is complete.";
    productToBuy = "Faded Short Sleeve T-shirts";
    menuContentPage.visitMenuContentPage();
  });

  it("then should be bought a t-shirt", () => {
    menuContentPage.goToTShirtMenu();
    productsListPage.addTShirtToCart(productToBuy);
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
