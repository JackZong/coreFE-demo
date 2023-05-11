import { pageModule } from "../product/page";
import { ProductList2 } from "./UI";

// 多个页面使用同一个模块
export const Product2 = pageModule.attachLifecycle(ProductList2);
