/** @type {import('next').NextConfig} */
// next.config.js
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = {
    images: {
        loader: "akamai",
        path: "",
    },
};
