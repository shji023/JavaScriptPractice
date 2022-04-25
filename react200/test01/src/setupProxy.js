const { createProxyMiddleware } = require('http-proxy-middleware');
// npm install --save http-proxy-middleware

module.exports = (app) => {
    // auth 포함 하위 route에 대해서는 localhost:5000/v1을 domain으로 하여 proxy설정
    app.use(
        '/server',
        createProxyMiddleware({
            target: 'http://localhost:8081',
            changeOrigin: true,
        }))
    // dummy 포함 하위 route에 대해서는 localhost:6000/v1을 domain으로 하여 proxy설정
    app.use(
        '/t2',
        createProxyMiddleware({
            target: 'http://localhost:8081', // http://localhost:8081/t2
            changeOrigin: true,
        }))
    app.use(
        '/t4',
        createProxyMiddleware({
            target: 'http://localhost:8082', // http://localhost:8081/t2
            changeOrigin: true,
        }))
}