const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');
const serverless = require('serverless-http');
const app = express();

const target = 'http://vercel.parsashonam.sbs:444';

app.use('/', createProxyMiddleware({ 
    target: target, 
    changeOrigin: true,
    secure: false,
    ws: true
}));

module.exports.handler = serverless(app);
