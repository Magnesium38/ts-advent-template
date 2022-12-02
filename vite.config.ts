import { defineConfig } from 'vitest/config'
import plainText from 'vite-plugin-plain-text'

export default defineConfig({
	plugins: [
		plainText(/\.txt$/),
	],
	test: {
		includeSource: ['src/**/*.{js,ts}'],
	},
})
