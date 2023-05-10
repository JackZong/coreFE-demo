import { Module, register } from "core-fe";
import { RootState } from "../../../type/state.interface";

class Dashboard extends Module<RootState, "dashboard"> {
  *onEnter() {
    console.log("enter dashboard");
  }
}

export const module = register(new Dashboard("dashboard", "xx"));
export const actions = module.getActions();
