import { test, expect } from "@playwright/test"
import { ProductsPage } from "../src/page-object/products-page"

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/products")
  await expect(page.getByRole("heading", { name: "Products" })).toBeVisible()
  await page.locator("button:nth-child(3)").first().click()
  await page.getByRole("link", { name: "Cart" }).click()
  await page.getByRole("link", { name: "ODTS RETAIL" }).click()
  await page.locator(".w-full").first().click()
  await page.getByRole("link", { name: "Cart" }).click()
  await page.getByRole("button", { name: "Proceed to Checkout" }).click()
  await page.getByRole("main").click()
  await page.locator('input[name="customerName"]').click()
  await page.locator('input[name="customerName"]').fill("Goko")
  await page.locator('input[name="customerName"]').press("Tab")
  await page.locator('input[name="customerTel"]').fill("0800680597")
  await page.locator('input[name="customerEmail"]').click()
  await page.locator('input[name="customerEmail"]').fill("goko@gmail.com")
  await page.getByRole("button", { name: "Complete Order" }).click()

  const qrImage = page.locator('img[alt="Payment QR Code"]');
  await expect(page.getByRole('heading', { name: 'Payment' })).toBeVisible();
  await expect(qrImage).toBeVisible();
  await expect(page.getByText('Select ImagePlease upload a')).toBeVisible();

  const fileInput = await page.locator('input[type="file"]')
  await fileInput.setInputFiles(
    "src/picture/27c18b14-24e4-4246-b46f-a34c1637867f.jpeg"
  )
  await expect(page.locator('#preview-container').getByRole('img')).toBeVisible();

  await page.getByRole("button", { name: "Complete Payment" }).click()
  await expect( page.getByRole('heading', { name: 'คำสั่งซื้อเสร็จสมบูรณ์' })).toBeVisible()
})