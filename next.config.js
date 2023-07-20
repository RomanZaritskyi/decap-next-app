/** @type {import('next').NextConfig} */

// const path = require("path");
// import path from "path";
// import nextTranslate from "next-translate-plugin";
// const nextTranslate = require("next-translate-plugin");
const path = require("path");
const nextTranslate = require("next-translate-plugin");

const nextConfig = {
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });
    return cfg;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src", "styles")],
  },
};

module.exports = nextTranslate({
  ...nextConfig,
});
