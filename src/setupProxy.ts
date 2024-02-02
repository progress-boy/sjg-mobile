// //  配置代理的方式一：在package.json配置文件中最有一行添加下面一行；
// //  "proxy": "http://localhost:5000"
// //  配置代理的方式二：见如下
// const proxy = require('http-proxy-middleware')
//
// module.exports = function(app) {
//     app.use(
//         proxy('/api1', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
//             target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)
//             changeOrigin: true, //控制服务器接收到的请求头中host字段的值
//             /*
//                 changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
//                 changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
//                 changeOrigin默认值为false，但我们一般将changeOrigin值设为true
//             */
//             pathRewrite: {'^/api1': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
//         }),
//         proxy('/api2', {
//             target: 'http://localhost:5001',
//             changeOrigin: true,
//             pathRewrite: {'^/api2': ''}
//         })
//     )
// }

// setupProxy.ts

import { createProxyMiddleware } from 'http-proxy-middleware';

export default function (app: any) {
    app.use(
        '/api', // 这里是你想要代理的路径: api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
        createProxyMiddleware({
            target: 'http://localhost:5000', // 这里是你的后端API地址(转发目标地址(能返回数据的服务器地址))
            changeOrigin: true, //控制服务器接收到的请求头中host字段的值
            /*
                changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
                changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
                changeOrigin默认值为false，但我们一般将changeOrigin值设为true
            */
            pathRewrite: {'^/api1': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
        })
    );
    app.use(
        '/api2', // 这里是你想要代理的路径
        createProxyMiddleware({
            target: 'http://localhost:5001',
            changeOrigin: true,
            pathRewrite: {'^/api2': ''}

        })
    );
}