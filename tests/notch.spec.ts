import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://wearenotch.com/qa_task/');
  await page.getByRole('button', { name: 'Accept All' }).click();
  await page.getByRole('textbox', { name: 'First name (Required)' }).click();
  await page.getByRole('textbox', { name: 'First name (Required)' }).fill('pero');
  await page.getByRole('textbox', { name: 'First name (Required)' }).press('Enter');
  await page.getByRole('textbox', { name: 'Last name (Required)' }).click();
  await page.getByRole('textbox', { name: 'Last name (Required)' }).fill('peric');
  await page.getByRole('textbox', { name: 'Email (Required)' }).click();
  await page.getByRole('textbox', { name: 'Email (Required)' }).fill('pero.peric');
  await page.getByRole('textbox', { name: 'Email (Required)' }).press('Alt+ControlOrMeta+@');
  await page.getByRole('textbox', { name: 'Email (Required)' }).fill('pero.pericgmail.com');
  await page.getByRole('textbox', { name: 'Email (Required)' }).click();
  await page.getByRole('textbox', { name: 'Email (Required)' }).press('Alt+ControlOrMeta+@');
  await page.getByRole('textbox', { name: 'Email (Required)' }).click();
  await page.getByRole('textbox', { name: 'Email (Required)' }).click();
  await page.getByRole('textbox', { name: 'Email (Required)' }).click();
  await page.getByRole('textbox', { name: 'Email (Required)' }).fill('pero.peric');
  await page.getByRole('textbox', { name: 'Email (Required)' }).press('Alt+ControlOrMeta+@');
  await page.getByRole('textbox', { name: 'Email (Required)' }).press('Alt+ControlOrMeta+@');
  await page.getByRole('textbox', { name: 'Email (Required)' }).fill('pero.pericgmail.com');
  await page.getByRole('textbox', { name: 'Phone number' }).click();
  await page.getByRole('textbox', { name: 'Phone number' }).fill('16166262');
  await page.locator('#gform_fields_7').click();
  await page.locator('#gform_fields_7').click();
});