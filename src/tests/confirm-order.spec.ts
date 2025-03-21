import {test} from "@playwright/test"
import {ConfirmOrderPage} from "../page-object/confirm-order-page"
import {ProductsPage} from "../page-object/products-page"

test.describe("Confirm order", () => {

  test("Confirm order success", async ({page}) => {
    const productsPage = new ProductsPage(page)
    const confirmOrderPage = new ConfirmOrderPage(page)

    await productsPage.gotoProductsPage()
    await productsPage.displayProducts()
    
    await confirmOrderPage.fillInput()
    await confirmOrderPage.confirmOrder()
  })
})