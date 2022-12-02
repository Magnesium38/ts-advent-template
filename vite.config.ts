import path from 'path'
import plainText from 'vite-plugin-plain-text'
import { defineConfig } from 'vitest/config'

export default defineConfig({
	plugins: [
		plainText(/\.txt$/u),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	test: {
		includeSource: ['src/**/*.{js,ts}'],
		setupFiles: ['src/array-extensions.ts'],
	},
})
