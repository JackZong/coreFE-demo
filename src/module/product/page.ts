import { Module, register, SagaGenerator, call, Loading } from "core-fe";
import { RootState } from "../../../type/state.interface";
import { updateProductById, addProduct } from "../../service";
import { ProductList, State } from "./type";
import { message, notification } from "antd";
import { productUpdating } from "./type";

const initialState: State = {
  productUpdating: false,
  showAddModal: false,
  total: 0,
};

class ProductModule extends Module<RootState, "product"> {
  *onEnter(): SagaGenerator {
    console.log("进入模块 Product");
  }
  @Loading(productUpdating)
  *updateProductById(id, data): SagaGenerator {
    const res = yield* call(() => updateProductById(id, data));
    if (res.status === 200) {
      // call another action??
      yield* this.toggleAddModalShow();
      notification.success({
        message: "更新商品成功",
      });
      message.info(
        "刷新了列表，理论上列表数据应该被修改，因使用mock接口不做处理"
      );
    } else {
      notification.error({
        message: "更新商品失败，请重试！",
      });
    }
  }

  @Loading(productUpdating)
  *addProduct(data: ProductList): SagaGenerator {
    const res = yield* call(() => addProduct(data));
    if (res.status === 200) {
      // call another action??
      yield* this.toggleAddModalShow();
      notification.success({
        message: "新增商品成功",
      });
      message.info(
        "刷新了列表，理论上列表应该新增一条数据，因使用mock接口不做处理"
      );
    } else {
      notification.error({
        message: "新增商品失败，请重试！",
      });
    }
  }

  *toggleAddModalShow() {
    this.setState({
      showAddModal: !this.state.showAddModal,
    });
    if (this.state.showAddModal) {
      this.logModalOpen();
    }
  }

  // 可以使用普通函数，普通函数也会被转化成redux action
  logModalOpen() {
    console.log("打开了添加商品弹窗");
  }
}
console.log("register1");
export const pageModule = register(new ProductModule("product", initialState));
export const pageActions = pageModule.getActions();
