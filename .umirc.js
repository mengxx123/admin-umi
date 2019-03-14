import { resolve } from 'path'

// ref: https://umijs.org/config/
export default {
    plugins: [
        // ref: https://umijs.org/plugin/umi-plugin-react.html
        ['umi-plugin-react', {
            antd: true,
            dva: true,
            dynamicImport: true,
            title: 'admin-umi',
            dll: true,
            routes: {
                exclude: [],
            },
            hardSource: true,
        }],
    ],
    alias: {
        _util: resolve(__dirname, './src/util'),
        _models: resolve(__dirname, './src/models'),
        _services: resolve(__dirname, './src/service'),
        _components: resolve(__dirname, './src/components'),
    },
    // proxy: {
    // 	'/api': {
    //         target: 'http://127.0.0.1:10000/',
    //         changeOrigin: true,
    //         pathRewrite: { '^/api': '' }
    // 	}
  	// },
}
