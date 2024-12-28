export const AppConfig = {
  site: {
    title: 'Next.js Optimized App',
    description: 'Created with Next.js and TypeScript',
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
  },
  features: {
    analytics: process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === 'true',
    api: {
      baseUrl: process.env.NEXT_PUBLIC_API_URL || '/api',
      timeout: 5000,
    },
  },
} as const