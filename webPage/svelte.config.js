import adapter from "@sveltejs/adapter-static";
import { svelte } from '@sveltejs/vite-plugin-svelte'
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			default: true,
		}
	},
	build: {
		rollupOptions: {
			output: {
				entryFileNames: '[name].js',
				assetFileNames: '[name].[ext]',
			},
		},
	},
	plugins: [
		svelte(),
	],
};

export default config;
