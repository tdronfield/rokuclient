const express = require("express");
const { create } = require("hbs");
const router = express.Router();

// This is where we add middleware
const {createProxyMiddleware } = require('http-proxy-middleware');

router.use("/", createProxyMiddleware({
    target: "http://localhost:5050",
    headers: {
        accept: "application/json, application/x-www-form-urlencoded"
    },
    changeOrigin: true
}))

router.get("/", (req, res) => {
    res.send("hit the main route");
})

module.exports = router;