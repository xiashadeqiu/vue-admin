const path = require("path"); // 引入path模块
function resolve(dir) {
    return path.join(__dirname, dir); //path.join(_dirname)设置绝对路径
}

module.exports = {
    publicPath: "./",
    chainWebpack: (config) => {
        config.resolve.alias
            //第一个参数：别名 第二个参数：路径
            .set("components", resolve("src/components"))
            .set("assets", resolve("src/assets"))
            .set("common", resolve("src/common"))
            .set("views", resolve("src/views"))
            .set("network", resolve("src/network"))
            .set("plugins", resolve("src/plugins"))
            .set("api", resolve("src/api"))
            .set("utils", resolve("src/utils"));
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [require("tailwindcss"), require("autoprefixer")],
            },
        },
    },
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "less",
            patterns: [path.resolve(__dirname, "./src/assets/css/global.less")],
        },
    },
};