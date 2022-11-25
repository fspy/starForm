// for graphql-codegen

Object.keys(require.cache)
  .filter((k) => !k.includes("node_modules"))
  .forEach((k) => {
    delete require.cache[k];
  });

  module.exports = require('@boost/module').requireModule(require.resolve('./schema.ts'))
