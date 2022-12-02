import { defineConfig } from 'vitest/config'
import plainText from 'vite-plugin-plain-text'
import path from 'path'

export default defineConfig({
	plugins: [
		plainText(/\.txt$/),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	test: {
		includeSource: ['src/**/*.{js,ts}'],
		setupFiles: ['src/array-extensions.ts']
	},
})
