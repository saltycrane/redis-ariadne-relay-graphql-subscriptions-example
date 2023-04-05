// This configuration should be duplicated in `next.config.js`
module.exports = {
  exclude: ["**/.next/**", "**/__generated__/**", "**/node_modules/**"],
  language: "typescript",
  schema: "../schema.graphql",
  src: "./",
};
