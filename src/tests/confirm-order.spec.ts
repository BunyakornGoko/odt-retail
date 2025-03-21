import { test } from "@playwright/test"
import { ConfirmOrderPage } from "../page-object/confirm-order-page"
import { ProductsPage } from "../page-object/products-page"
import { CartPage } from "../page-object/cart-page"
import { expect } from "bun:test"

test.describe("Confirm order", () => {
  test("Confirm order success", async ({ page }) => {
    const productsPage = new ProductsPage(page)
    const cartPage = new CartPage(page)
    const confirmOrderPage = new ConfirmOrderPage(page)

    await productsPage.gotoProductsPage()
    await productsPage.displayProducts()
    await productsPage.clickIntoCart()
    await cartPage.verifyCartElements()
    await cartPage.proceedToCheckout()

    await confirmOrderPage.showOrderConfirmPage()
    await confirmOrderPage.fillInput()
    await confirmOrderPage.confirmOrder()
  })
})
