/** @type {import('next').NextConfig} */
// next.config.js
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = {
    assetPrefix:
        process.env.NODE_ENV === "production"
            ? "https://sovla.github.io/Portfolio2022"
            : "",
    images: {
        loader: "akamai",
        path: "",
    },
};
