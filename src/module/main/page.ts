import { Interval, Module, register, SagaGenerator } from "core-fe";
import { app } from "core-fe/src/app";

import { RootState } from "../../../type/state.interface";

class MainModule extends Module<RootState, "main"> {
  *changeUrl(path: string): SagaGenerator {
    this.setState({ pathname: path });
    app.browserHistory.push(path);
  }
}
console.log("register2");
export const pageModule = register(
  new MainModule("main", {
    pathname: "/welcome",
  })
);

export const pageActions = pageModule.getActions();
