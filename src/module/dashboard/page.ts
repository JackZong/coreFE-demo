import { Module, register, Interval, call } from "core-fe";
import { RootState } from "../../../type/state.interface";
import { getProductAmount } from "../../service";

const initialState: { total: number } = {
  total: 0,
};
class Dashboard extends Module<RootState, "dashboard"> {
  override *onEnter() {
    console.log("enter dashboard");
  }

  @Interval(6)
  *onTick() {
    const res = yield* call(() => getProductAmount());
    if (res.status === 200) {
      this.setState({
        total: res.data,
      });
    }
  }
}
console.log("register3");
export const module = register(new Dashboard("dashboard", initialState));
export const actions = module.getActions();
