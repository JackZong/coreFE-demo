import ProductListComponent from "./UI";
import { pageModule } from "./page";
export const Product = pageModule.attachLifecycle(ProductListComponent);
