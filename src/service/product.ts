import { uri } from "core-fe";
import { API } from "../../type/api.interface";
import { request } from "../util/network";
import { ProductList } from "../module/product/type";

export const getProductList = (params) => {
  // add query
  const url = uri("/product/list", params);
  // console.log("url:", url);
  return request<API.getProductListResponse>({
    path: url,
  });
};

export const getMenuList = () => {
  return request<API.GetMenuList>({
    path: "/menu/list",
  });
};

/**获取商品类别 */
export const getCategoryList = () => {
  return request<API.GetCategoryList>({
    path: "/category/list",
  });
};

/**新建商品 */
export const addProduct = (data: ProductList) => {
  return request<API.AddProduct>({
    path: "/product",
    method: "POST",
    body: JSON.stringify(data),
  });
};

/**更新商品 */
export const updateProductById = (id: string, data: ProductList) => {
  return request<API.UpdateProduct>({
    path: `/product/${id}`,
    method: "PUT",
    body: JSON.stringify(data),
  });
};

/**获取当前商品数量 */
export const getProductAmount = () => {
  return request<API.GetProductAmount>({
    path: `/product/amount`,
    method: "GET",
  });
};
