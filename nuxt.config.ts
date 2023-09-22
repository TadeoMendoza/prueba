// https://nuxt.com/docs/api/configuration/nuxt-config
const baseUrl = '/v2/';

export default defineNuxtConfig({
	router: {
		base: '/v2/',
	},
	app: {
		baseURL: '/v2/',
	},
  


	ssr: false,

	build: {
		transpile: ['primevue'],
		publicPath: '/v2/',
		buildDir: 'dist',
		buildAssetsDir:'/v2/',
	},
});
