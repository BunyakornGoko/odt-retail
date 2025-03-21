import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/products');
  await page.getByRole('heading', { name: 'Products' }).click();
  await page.locator('button:nth-child(3)').first().click();
  await page.getByRole('link', { name: 'Cart' }).click();
  await page.getByRole('link', { name: 'ODTS RETAIL' }).click();
  await page.locator('.w-full').first().click();
  await page.getByRole('link', { name: 'Cart' }).click();
  await page.getByRole('button', { name: 'Proceed to Checkout' }).click();
  await page.getByRole('main').click();
  await page.locator('input[name="customerName"]').click();
  await page.locator('input[name="customerName"]').fill('Goko');
  await page.locator('input[name="customerName"]').press('Tab');
  await page.locator('input[name="customerTel"]').fill('0800680597');
  await page.locator('input[name="customerEmail"]').click();
  await page.locator('input[name="customerEmail"]').fill('goko@gmail.com');
  await page.getByRole('button', { name: 'Complete Order' }).click();
  // await page.getByText('Select Image').click();
  // await page.getByText('ODTS RETAILCartPaymentOrder').setInputFiles('27c18b14-24e4-4246-b46f-a34c1637867f.jpeg');
  const fileInput = await page.locator('input[type="file"]');
  await fileInput.setInputFiles('src/picture/27c18b14-24e4-4246-b46f-a34c1637867f.jpeg');
  await page.getByRole('button', { name: 'Complete Payment' }).click();
  await page.getByRole('heading', { name: 'คำสั่งซื้อเสร็จสมบูรณ์' }).click();
});