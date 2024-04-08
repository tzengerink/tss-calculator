import { test, expect, type Page } from '@playwright/test'

const setInputValues = async (page: Page) => {
  await page.goto('/')
  await page.getByLabel('Target fitness').fill('42')
  await page.getByLabel('Number of active weeks').fill('5')
  await page.getByLabel('Number of recovery weeks').fill('3')
  await page.keyboard.press('Tab')
  await page.keyboard.press('ArrowRight')
}

test('calculates TSS', async ({ page }) => {
  await setInputValues(page)
  await expect(page.getByText('324', { exact: true })).toBeVisible()
  await expect(page.getByText('243', { exact: true })).toBeVisible()
})

test('stores input values', async ({ page }) => {
  await setInputValues(page)
  await page.goto('https://github.com/')
  await page.goto('/')
  await expect(page.getByLabel('Target fitness')).toHaveValue('42')
  await expect(page.getByLabel('Number of active weeks')).toHaveValue('5')
  await expect(page.getByLabel('Number of recovery weeks')).toHaveValue('3')
  await expect(page.getByText('75%')).toBeVisible()
})

test('resets input values', async ({ page }) => {
  await setInputValues(page)
  await page.getByTitle('menu').click()
  await page.getByText('Reset').click()
  await expect(page.getByText('757', { exact: true })).toBeVisible()
  await expect(page.getByText('530', { exact: true })).toBeVisible()
})
