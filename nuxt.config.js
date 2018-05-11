module.exports = {
	/*
	 ** Headers of the page
	 *  用hid 是为了子页面覆盖description
	 */
	head: {
		title: 'nuxt_test',
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{hid: 'description', name: 'description', content: 'Nuxt.js project'}
		],
		link: [
			{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
		]
	},
	/*
	 ** Customize the progress bar color
	 */
	loading: {color: '#3B8070'},
	/*
	 ** Build configuration
	 *   analyze: true,  开启大小分析工具
	 *   vendor  // 依赖的第三方模块
	 */
	build: {
		analyze: true,
		vendor: ["axios"],
		/*
		 ** Run ESLint on save
		 */
		extend (config, {isDev, isClient}) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		},

		// extend(config, { isDev, isClient, isServer }){
		// 	config.module.rules.forEach((rule) => {
		// 		if (rule.test.toString() === '/\\.(png|jpe?g|gif|svg)$/'){
		// 			rule.use = [
		// 				{
		// 					loader: 'url-loader',
		// 					options: {
		// 						limit: 1000,
		// 						name: 'img/[name].[hash:7].[ext]'
		// 					}
		// 				},
		// 				{
		// 					loader: 'image-webpack-loader',
		// 					options: {
		// 						mozjpeg: {
		// 							progressive: true,
		// 							quality: 65
		// 						},
		// 						optipng: {
		// 							enabled: false,
		// 						},
		// 						pngquant: {
		// 							quality: '65-90',
		// 							speed: 1,
		// 							verbose: true
		// 						},
		// 					}
		// 				},
		// 			];
		// 			delete rule.loader;
		// 			delete rule.options;
		// 		}
		// 	})
		// }
	}
}
