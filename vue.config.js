const fs = require("fs");
const path = require("path");

function resolvePath(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    host: "localhost",
    port: "8080",
    proxy: {
      "/api": {
        target: " http://127.0.0.1:1029",
        changeOrigin: "true",
        ws: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
    disableHostCheck: true,
  },
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
      sass: {
        data: fs.readFileSync("src/assets/css/variable.scss", "utf-8"),
      },
    },
    modules: false,
  },
  configureWebpack: {
    resolve: {
      alias: {
        'assets': resolvePath("src/assets"),
        'views': resolvePath("src/views"),
        'api': resolvePath("src/api"),
        'utils': resolvePath("src/utils"),
        'vux': resolvePath("src/store"),
        'config': resolvePath("src/config")
      },
    },
  },
};
