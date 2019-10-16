module.exports = {

    devServer: {
        host: "localhost",
        port: "8080",
        proxy: {
            '/api': {
                target: " http://127.0.0.1:1029",
                changeOrigin: "true",
                ws: true,
                pathRewrite: {
                    '^/api':''
                }
            }
        }
    },

    // css: {
    //     loaderOptions: {
    //         postcss: {
    //             plugins: [
    //                 require('postcss-plugin-px2rem')({
    //                     rootValue:75,      // 新版本的是这个值
    //                     mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
    //                     minPixelValue: 3 //设置要替换的最小像素值(3px会被转rem)。 默认 0
    //                 }),
    //             ]
    //         }
    //     }
    // },
    css: {
        loaderOptions: { // 向 CSS 相关的 loader 传递选项
          less: {
            javascriptEnabled: true
          }
        }
      }
}