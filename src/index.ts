import { bootstrap } from "core-fe";
import { Main } from "./module/main";
import { ErrorHandler } from "./ErrorHandler";

// 应用入口，全局错误、log处理
bootstrap({
  componentType: Main,
  errorListener: new ErrorHandler(),
  // loggerConfig: {
  //   serverURL: "http://127.0.0.1:4523/m1/2704689-0-default",

  // },
});
