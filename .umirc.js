import {resolve} from 'path'

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
    _components: resolve(__dirname, './src/components'),
  },
}
