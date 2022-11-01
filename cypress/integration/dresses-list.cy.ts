import {DressesListPage} from "../page/dresses-list.page";
import {MenuContentPage} from "../page/menu-content.page";

describe("the user navigates to the dresses page should", () => {
  let menuContentPage: MenuContentPage;
  let dressesListPage: DressesListPage;
  let dressList: Array<string>;
  let dressNumer: number;

  before(() => {
    menuContentPage = new MenuContentPage();
    dressesListPage = new DressesListPage();

    dressList = [
      "Printed Dress",
      "Printed Dress",
      "Printed Summer Dress",
      "Printed Summer Dress",
      "Printed Chiffon Dress",
    ];

    dressNumer = dressList.length;
    menuContentPage.visitMenuContentPage();
  });

  it("show the available dresses", () => {
    menuContentPage.visitMenuDressPage();

    dressesListPage.validateItemsNumber(dressNumer);
    dressesListPage.validateItemsNames(dressList);
  });
});
