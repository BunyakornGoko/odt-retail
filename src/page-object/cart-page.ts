import { Page, expect } from "@playwright/test";

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Navigate to the cart page (optional if you're already on the page)
  async gotoCartPage() {
    await this.page.goto("http://localhost:3000/cart");
  }

  // Verify cart elements and proceed to checkout
  async verifyCartElements() {
    // Ensure we are on the cart page
    await expect(this.page).toHaveURL("http://localhost:3000/cart");

    // Verify the heading and the columns in the cart
    await expect(this.page.getByRole("heading", { name: "Your Shopping Cart" })).toBeVisible();
    await expect(this.page.getByRole("cell", { name: "Product" })).toBeVisible();
    await expect(this.page.getByRole("cell", { name: "Quantity" })).toBeVisible();
    await expect(this.page.getByRole("cell", { name: "Price" })).toBeVisible();
    await expect(this.page.getByRole("cell", { name: "Total" })).toBeVisible();
    await expect(this.page.getByRole("heading", { name: "Order Summary" })).toBeVisible();
  }

  // Click "Proceed to Checkout" button
  async proceedToCheckout() {
    await expect(this.page.getByRole("button", { name: "Proceed to Checkout" })).toBeVisible();
    await this.page.getByRole("button", { name: "Proceed to Checkout" }).click();
  }
}
