
export default defineNuxtConfig({
	// router: {
	// 	base: '/v2/',
	// },
	app: {
		baseURL: '/v2/',
	},
	ssr: false,
	build: {
		publicPath: '/v2/',
		// buildDir: 'dist',
		buildAssetsDir:'/v2/',
	},
});
