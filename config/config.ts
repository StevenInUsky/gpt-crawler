import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "http://www.caac.gov.cn/FWDT/",
  match: "http://www.caac.gov.cn/FWDT/**",
  maxPagesToCrawl: 100,
  outputFileName: "output.json",
  //selector: "div.list_con",
  waitForSelectorTimeout: 3000, // Added load timeout of 3000ms
};



import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.toutiao.com/c/user/token/MS4wLjABAAAA_dStlELaocfFxoLQX3vQ3PVnXKF2b7ZTFR1J9Cn_QAQ/?source=tuwen_detail&log_from=3c853c7e6bbcb_1712239853944&tab=article",
  match: "https://www.toutiao.com/article/*",
  maxPagesToCrawl: 100,
  outputFileName: "output-toutiao-民航之翼.json",
  //  selector: "article", // Updated to target the article tag for content extraction
  waitForSelectorTimeout: 5000, // Increased load timeout to 5000ms to allow more time for content to load
  // Removed the 'useStealth' property as it is not recognized in the Config type
  // Removed 'retryDelay' and 'maxRetries' properties as they are not recognized in the Config type
};


export const defaultConfig: Config = {
  url: "http://www.chemchina.com.cn/20478.html",
  match: "http://www.chemchina.com.cn/*",
  maxPagesToCrawl: 100,
  outputFileName: "output-化工博物馆.json",
  //  selector: "article", // Updated to target the article tag for content extraction
  // waitForSelectorTimeout: 5000, // Increased load timeout to 5000ms to allow more time for content to load
  // Removed the 'useStealth' property as it is not recognized in the Config type
  // Removed 'retryDelay' and 'maxRetries' properties as they are not recognized in the Config type
};