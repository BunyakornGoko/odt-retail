import { test, expect } from "@playwright/test"
import { ProductsPage } from "../page-object/products-page"

test("get all products", async ({ page }) => {
  const productsPage = new ProductsPage(page)
  await productsPage.gotoProductsPage()
  await productsPage.displayProducts()
})



