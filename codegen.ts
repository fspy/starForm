import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "src/graphql/build-schema.js",
  documents: ["src/**/*.tsx", "!src/graphql/**/*"],
  ignoreNoDocuments: true,
  generates: {
    "./src/graphql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
