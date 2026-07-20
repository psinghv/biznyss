// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	site: 'https://biznyss.com',
	integrations: [react(), sitemap()],
	server: {
		host: '127.0.0.1',
		port: 4322,
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
