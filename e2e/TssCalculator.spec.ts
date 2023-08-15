import { test, expect, Page } from '@playwright/test'

const setInputValues = async (page: Page) => {
  await page.goto('/')
  await page.getByLabel('Target fitness').fill('42')
  await page.getByLabel('Number of active weeks').fill('5')
  await page.getByLabel('Number of rest weeks').fill('3')
  await page.getByLabel('Rest week factor').press('ArrowRight') // +5%
}

test('calculates TSS for active and rest week', async ({ page }) => {
  await setInputValues(page)
  await expect(page.getByText('324')).toBeVisible()
  await expect(page.getByText('243')).toBeVisible()
})

test('resets calculation to the default values', async ({ page }) => {
  await setInputValues(page)
  await page.getByText('Reset').click()
  await expect(page.getByText('757')).toBeVisible()
  await expect(page.getByText('530')).toBeVisible()
})
