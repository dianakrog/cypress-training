import {MenuContentPage} from "../page/menu-content.page";
import {ProductsListPage} from "../page/products-list.page";
import { ShopingCartPage } from "../page/shoping-cart.page";
import {SignInPage} from "../page/login.page";
import {AddressPage} from "../page/address-step.page";
import {ShippingPage} from "../page/shipping-step.page";
import {PaymentPage} from "../page/payment-step.page";

const menuContentPage = new MenuContentPage();
const productsListPage = new ProductsListPage();
const shopingCartPage = new ShopingCartPage();
const signInPage = new SignInPage();
const adressPage = new AddressPage();
const shippingPage = new ShippingPage();
const paymentPage = new PaymentPage();

const email = "aperdomobo@gmail.com";
const passwd = "WorkshopProtractor";


describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();

    productsListPage.addCartProductOne();

    shopingCartPage.proceedCheckout();

    signInPage.signIn(email, passwd);

    adressPage.proceedCheckout();

    shippingPage.acceptTermsService();
    shippingPage.proceedCheckout();

    paymentPage.slectPayMethod();
    paymentPage.confirmOrder();

    paymentPage.verififyOrder();
  });
});
