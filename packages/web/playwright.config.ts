import { defineConfig, devices } from '@playwright/test'

const PORT = 3000
const HOST = `http://localhost:${PORT}`

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
  projects: [{ name: 'desktop:firefox', use: { ...devices['Desktop Firefox'] } }],
  webServer: {
    command: `VITE_CJS_TRACE=true yarn dev -p ${PORT}`,
    url: HOST,
    reuseExistingServer: !process.env.CI,
  },
})
