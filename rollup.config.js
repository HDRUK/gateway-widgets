import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import { uglify } from "rollup-plugin-uglify";
import filesize from "rollup-plugin-filesize";
import multiInput from "rollup-plugin-multi-input";

const plugins = [
  multiInput(),
  babel({
    exclude: "node_modules/**",
    babelrc: false,
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            ie: "11",
          },
        },
      ],
    ],
  }),
  resolve(),
  uglify(),
  filesize({
    showGzippedSize: false,
  }),
];

const config = {
  input: ["src/*.js"],
  output: {
    dir: "dist",
    format: "esm",
  },
  plugins,
};

export default config;
