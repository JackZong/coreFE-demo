import { State } from "core-fe";
import { MainState } from "../src/module/main/type";
import { State as ProductState } from "../src/module/product/type";

export interface RootState extends State {
  app: {
    main: MainState;
    product: ProductState;
    dashboard: any;
  };
}
