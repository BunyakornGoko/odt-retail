import { test, expect, Page } from "@playwright/test"

export class PaymentPage {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async preCondition() {
    await this.page.goto("http://localhost:3000/products")
    await expect(this.page.getByRole("heading", { name: "Products" })).toBeVisible()
    await this.page.locator("button:nth-child(3)").first().click()
    await this.page.getByRole("link", { name: "Cart" }).click()
    await this.page.getByRole("link", { name: "ODTS RETAIL" }).click()
    await this.page.locator(".w-full").first().click()
    await this.page.getByRole("link", { name: "Cart" }).click()
    await this.page.getByRole("button", { name: "Proceed to Checkout" }).click()
    await this.page.getByRole("main").click()
    await this.page.locator('input[name="customerName"]').click()
    await this.page.locator('input[name="customerName"]').fill("Goko")
    await this.page.locator('input[name="customerName"]').press("Tab")
    await this.page.locator('input[name="customerTel"]').fill("0800680597")
    await this.page.locator('input[name="customerEmail"]').click()
    await this.page.locator('input[name="customerEmail"]').fill("goko@gmail.com")
    await this.page.getByRole("button", { name: "Complete Order" }).click()
  }

  async displayQRcode() {
    const qrImage = this.page.locator('img[alt="Payment QR Code"]');
    await expect(this.page.getByRole('heading', { name: 'Payment' })).toBeVisible();
    await expect(qrImage).toBeVisible();
    await expect(this.page.getByText('Select ImagePlease upload a')).toBeVisible();
  }

  async uploadImage() {
    const fileInput = await this.page.locator('input[type="file"]')
    await fileInput.setInputFiles(
        "src/picture/27c18b14-24e4-4246-b46f-a34c1637867f.jpeg"
    )
    await expect(this.page.locator('#preview-container').getByRole('img')).toBeVisible();
  }
}
