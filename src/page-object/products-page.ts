import { test, expect, Page } from "@playwright/test"

export class ProductsPage {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async gotoProductsPage() {
    await this.page.goto("http://localhost:3000/products")
  }

  async displayProducts() {
    await expect(
      this.page.getByRole("heading", { name: "Products" })
    ).toBeVisible()

    const products = await this.page.$$eval(".product-item", (items) =>
      items.map((item) => ({
        name: item.querySelector(".product-name")?.textContent,
        price: item.querySelector(".text-lg.font-bold")?.textContent,
        description: item.querySelector(".text-gray-600.mt-2")?.textContent
      }))
    )

    for (const product of products) {
      if (product.name && product.price && product.description) {
        await expect(
          this.page.getByText(
            product.name + "" + product.description + product.price
          )
        ).toBeVisible()
      }
    }
  }
  

}
