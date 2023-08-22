import { defineConfig, devices } from '@playwright/test'

const PORT = 3000
const HOST = `http://127.0.0.1:${PORT}`

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 2,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'list',
  use: {
    baseURL: HOST,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'desktop:firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'mobile:chrome',
      use: { ...devices['Nexus 5'] },
    },
  ],
  webServer: {
    command: `yarn dev -p ${PORT}`,
    url: HOST,
    reuseExistingServer: !process.env.CI,
  },
})
