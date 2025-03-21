import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/products');
  await page.locator('.w-full').first().click();
  await page.getByRole('link', { name: 'Cart' }).click();
  await page.getByRole('button', { name: 'Proceed to Checkout' }).click();
  await page.locator('input[name="customerName"]').click();
  await page.locator('input[name="customerName"]').fill('Example');
  await page.locator('input[name="customerTel"]').click();
  await page.locator('input[name="customerTel"]').fill('0812345678');
  await page.locator('input[name="customerEmail"]').click();
  await page.locator('input[name="customerEmail"]').fill('user@example.com');
  await page.getByRole('button', { name: 'Complete Order' }).click();
  // await page.getByText('Select Image').click();
  // await page.getByText('ODTS RETAILCartPaymentOrder').setInputFiles('./test_src/u-i-i-ai-o-uu-ii-a-i.jpeg');
  const fileInput = await page.locator('input[type="file"]');
  await fileInput.setInputFiles('src/tests/test_src/u-i-i-ai-o-uu-ii-a-i.jpeg');

  await page.getByRole('button', { name: 'Complete Payment' }).click();
  await page.getByRole('link', { name: 'กลับสู่หน้าหลัก' }).click();
});