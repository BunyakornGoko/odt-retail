import { test } from "@playwright/test";
import { ProductsPage } from "../page-object/products-page";
import { CartPage } from "../page-object/cart-page";

test("view cart", async ({ page }) => {
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  // Navigate to the products page
  await productsPage.gotoProductsPage();

  // Click on the cart link and verify cart page elements
  await page.getByRole("link", { name: "Cart" }).click();
  
  // Verify cart elements
  await cartPage.verifyCartElements();

  // Proceed to checkout
  await cartPage.proceedToCheckout();
});
