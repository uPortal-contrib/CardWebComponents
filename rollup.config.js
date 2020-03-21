import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";

export default [
  {
    input: "src/my-card.js",
    plugins: [resolve(), commonjs(), babel()],
    context: "null",
    moduleContext: "null",
    output: [
      {
        format: "esm",
        file: "dist/my-card.esm.js",
      },
      {
        format: "umd",
        name: "cardComponent",
        file: "dist/my-card.umd.js",
      },
      {
        format: "cjs",
        file: "dist/my-card.cjs.js",
      },
    ],
  },
];
