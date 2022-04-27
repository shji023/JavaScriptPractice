const { createProxyMiddleware } = require('http-proxy-middleware');
// npm install --save http-proxy-middleware

module.exports = (app) => {
    app.use(
        '/t1',
        createProxyMiddleware({
            target: 'http://localhost:8081', // http://localhost:8081/t2
            changeOrigin: true,
        }))
    app.use(
        '/t2',
        createProxyMiddleware({
            target: 'http://localhost:8081', // http://localhost:8081/t2
            changeOrigin: true,
        }))
    app.use(
        '/t6',
        createProxyMiddleware({
            target: 'http://localhost:8081', // http://localhost:8081/t4
            changeOrigin: true,
        }))
    app.use(
        '/t5',
        createProxyMiddleware({
            target: 'http://localhost:8081', // http://localhost:8081/t4
            changeOrigin: true,
        }))
}