import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/products');
  await page.getByRole('heading', { name: 'Products' }).click();
});