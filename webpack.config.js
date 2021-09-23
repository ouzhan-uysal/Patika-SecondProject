const path = require('path')

module.exports = {
    /*
    Mode değişikliğinden sonra projeyi tekrar build etmem gerekir. (npm run build) Modu package.json içerisinde her bir kısayol içerisinde belirtebilirsin.
    mode: "development" --> dist içerisinde .js dosyanın geliştiriciler için daha okunur bir halini sunar.

    mode: "production"  --> .js dosyasının sıkıştırılmış halini bize sunar bu şekilde aynı işlevini yerine getirirken boyutu küçülmüş olur.
    */
    // mode: "development",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'main.js'
    },
    devServer: {
        port: 5005,
        // contentBase: path.join(__dirname, 'dist'),
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/assets/'
    },
    module : {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }
        }]
    }
}