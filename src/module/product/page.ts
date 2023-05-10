import { Interval, Module, register, SagaGenerator } from "core-fe";
import { RootState } from "../../../type/state.interface";

class ProductModule extends Module<RootState, "product"> {
  *onEnter(): SagaGenerator {
    this.setState({ title: "hello" });
    console.log("enter");
  }

  *changeTitle(): SagaGenerator {
    this.setState({ title: "world" });
  }

  // *onDestroy(): SagaGenerator {
  //   alert("leave");
  // }

  //   *onTick(): SagaGenerator {
  //     console.log("dd");
  //   }
}

export const pageModule = register(new ProductModule("product", { title: "" }));
export const mainActions = pageModule.getActions();
