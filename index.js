const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

const target = process.env.TARGET_DOMAIN || 'http://localhost:444';

app.use('/', createProxyMiddleware({ 
    target: target, 
    changeOrigin: true,
    ws: true 
}));

app.listen(process.env.PORT || 3000);
