import { Interval, Module, register, SagaGenerator } from "core-fe";
import { app } from "core-fe/src/app";

import { RootState } from "../../../type/state.interface";

class MainModule extends Module<RootState, "main"> {
  *onEnter(): SagaGenerator {
    this.setState({ title: "hello" });
  }

  *changeTitle(text): SagaGenerator {
    this.setState({ title: text });
  }

  //   *onTick(): SagaGenerator {
  //     console.log("dd");
  //   }

  *changeUrl(path: string): SagaGenerator {
    // console.log("changed url:", path);
    // this.pushHistory(path);
    this.setState({ pathname: path });
    app.browserHistory.push(path);
  }
}

export const pageModule = register(
  new MainModule("main", {
    title: "",
    pathname: "/welcome",
  })
);
export const mainActions = pageModule.getActions();

console.log(pageModule);
