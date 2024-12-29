import { defineConfig } from 'vitest/config'
import { resolve } from 'path'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.ts',
    include: ['src/**/*.test.{js,ts,jsx,tsx}', 'src/**/*.spec.{js,ts,jsx,tsx}'],
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    alias: {
      '@': resolve(__dirname, 'src'),
    },
    exclude: ['node_modules', 'dist'],
  },
})
