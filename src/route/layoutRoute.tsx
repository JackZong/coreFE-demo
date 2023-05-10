import React from "react";
import {
  ChromeFilled,
  CrownFilled,
  SmileFilled,
  TabletFilled,
} from "@ant-design/icons";

export const route = {
  path: "/",
  routes: [
    {
      path: "/welcome",
      name: "欢迎",
      icon: <SmileFilled />,
      component: "./Welcome",
    },
    {
      path: "/product",
      name: "商品管理",
      icon: <CrownFilled />,
      access: "canAdmin",
      component: "./Admin",
      routes: [
        {
          path: "/product/list",
          name: "商品列表",
          icon: "https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg",
          component: "./Welcome",
        },
        {
          path: "/product/add",
          name: "新建商品",
        },
      ],
    },
  ],
};
