import { State } from "core-fe";
import { MainState } from "../src/module/main/type";

export interface RootState extends State {
  app: {
    main: MainState;
    product: any;
    dashboard: any;
  };
}
