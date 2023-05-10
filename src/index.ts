import { bootstrap } from "core-fe";
import { Main } from "./module/main";
import { ErrorHandler } from "./ErrorHandler";

bootstrap({
  componentType: Main,
  errorListener: new ErrorHandler(),
  // loggerConfig: {
  //   serverURL: "http://127.0.0.1:4523/m1/2704689-0-default",

  // },
});
