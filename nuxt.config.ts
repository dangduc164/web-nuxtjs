import yaml from '@rollup/plugin-yaml'

export default defineNuxtConfig({
  vite: {
    plugins: [
      yaml()
    ]
  },

  compatibilityDate: '2025-01-18'
})