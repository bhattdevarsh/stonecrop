/// <reference types="vitest" />

import { resolve } from 'path'
import { defineConfig } from 'vitest/config'

const projectRootDir = resolve(__dirname)

export default defineConfig({
	resolve: {
		alias: {
			'@': resolve(projectRootDir, 'src'),
		},
	},
	build: {
		sourcemap: true,
		lib: {
			entry: resolve(projectRootDir, 'src/index.ts'),
			name: '@agritheory/graphql-client',
		},
		rollupOptions: {},
	},
	test: {
		globals: true,
		environment: 'jsdom',
		coverage: {
			lines: 50,
			branches: 50,
			functions: 50,
			statements: 50,
			// required for Github Actions CI
			reporter: ['text', 'json-summary', 'json'],
			reportsDirectory: './coverage',
			exclude: [
				'coverage/**',
				'dist/**',
				'stories/**',
				'types/**',
				'packages/*/test{,s}/**',
				'**/*.d.ts',
				'**/*.setup.ts',
				'cypress/**',
				'test{,s}/**',
				'test{,-*}.{js,cjs,mjs,ts,tsx,jsx}',
				'**/*{.,-}test.{js,cjs,mjs,ts,tsx,jsx}',
				'**/*{.,-}spec.{js,cjs,mjs,ts,tsx,jsx}',
				'**/__tests__/**',
				'**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
				'**/.{eslint,mocha,prettier}rc.{js,cjs,yml}',
			],
			all: true,
			skipFull: true,
		},
	},
})