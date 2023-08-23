import * as Sentry from '@sentry/browser'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  Sentry.init({
    dsn: config.public.sentryDsn,
    environment: config.public.sentryEnvironment,
    integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],
    tracesSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
  })
})
