import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://dapdev.union-sky.com.cn/",
  match: "https://dapdev.union-sky.com.cn/**",
  maxPagesToCrawl: 100,
  outputFileName: "output.json",
  //selector: "div.list_con",
  waitForSelectorTimeout: 3000, // Added load timeout of 3000ms
};
