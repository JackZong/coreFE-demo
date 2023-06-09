import { MenuDataItem } from "@ant-design/pro-components";

export declare namespace API {
  interface getProductListResponse {
    status: number;
    message: "string";
    data: [
      {
        id: "string";
        name: "string";
        description: "string";
        price: 0;
        image_url: "string";
        category: "string";
        tags: ["string"];
      }
    ];
  }

  // Generated by https://quicktype.io

  export interface GetMenuList {
    status: number;
    message: string;
    data: MenuDataItem[];
  }

  // Generated by https://quicktype.io

  export interface GetCategoryList {
    status: number;
    message: string;
    data: CategoryData[];
  }

  export interface CategoryData {
    name: string;
    id: string;
  }

  interface AddProduct {
    status: number;
    message: string;
    data: null;
  }

  interface UpdateProduct {
    status: number;
    message: string;
    data: null;
  }

  interface GetProductAmount {
    status: number;
    message: string;
    data: number;
  }
}
