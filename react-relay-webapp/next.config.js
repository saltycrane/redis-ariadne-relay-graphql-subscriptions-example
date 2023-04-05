module.exports = {
  compiler: {
    // This should match relay.config.js
    relay: {
      exclude: ["**/.next/**", "**/__generated__/**", "**/node_modules/**"],
      language: "typescript",
      schema: "../schema.graphql",
      src: "./",
    },
  },
};
