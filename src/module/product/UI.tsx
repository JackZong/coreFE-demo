import React, {
  FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useAction, ajax, async, Dispatch } from "core-fe";
import { useSelector } from "react-redux";
import { RootState } from "../../../type/state.interface";
import { mainActions } from "./page";
import {
  ActionType,
  ProFormInstance,
  ProTable,
} from "@ant-design/pro-components";
import type { ProColumnType, ProColumns } from "@ant-design/pro-components";
import { ProductList } from "./type";
import { addProduct, getProductList, updateProductById } from "../../service";
import { Button, message, notification } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { AddProduct } from "./components/AddProduct";
import { FormInstance } from "antd/lib/form";

function ProductList() {
  const [showAddProduct, toggleShowAddProduct] = useState(false);

  const [initialValues, setInitialValues] = useState<ProductList | null>(null);
  const actionRef = useRef<ActionType>(null);

  const addProductFormRef = useRef<ProFormInstance>(null);

  const handleAddProduct = useCallback((props) => {
    console.log("props:", props);
    if (props.id) {
      // edit mode
      updateProductById(props.id, { ...props, id: undefined }).then((res) => {
        if (res.status === 200) {
          notification.success({
            message: "更新商品成功",
          });
          toggleShowAddProduct(false);
          actionRef.current?.reload();
          message.info(
            "刷新了列表，理论上列表数据应该被修改，因使用mock接口不做处理"
          );
        } else {
          notification.error({
            message: "更新商品失败，请重试！",
          });
        }
      });
    } else {
      addProduct(props).then((res) => {
        if (res.status === 200) {
          notification.success({
            message: "新增商品成功",
          });
          toggleShowAddProduct(false);
          actionRef.current?.reload();
          message.info(
            "刷新了列表，理论上列表应该新增一条数据，因使用mock接口不做处理"
          );
        } else {
          notification.error({
            message: "新增商品失败，请重试！",
          });
        }
      });
    }
  }, []);

  const columns: ProColumns<ProductList>[] = [
    {
      title: "产品名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "简介",
      dataIndex: "description",
      ellipsis: true,
      search: false,
    },
    {
      title: "类别",
      dataIndex: "category",
      search: false,
    },
    {
      title: "标签",
      dataIndex: "tags",
      valueType: "select",
      search: false,
    },
    {
      title: "图片",
      dataIndex: "image_url",
      valueType: "image",
      search: false,
    },
    {
      title: "价格",
      dataIndex: "price",
      search: false,
    },
    {
      title: "操作",
      valueType: "option",
      render: (text, record, _, action) => {
        return (
          <>
            <a
              href="javascript:void(0)"
              key="edit"
              onClick={() => {
                // console.log("edit:", record);
                toggleShowAddProduct(true);
                addProductFormRef?.current?.setFieldsValue(record);
                if (!addProductFormRef?.current) {
                  setInitialValues(record);
                }
                //  console.log(addProductFormRef?.current);
              }}
            >
              编辑
            </a>
          </>
        );
      },
    },
  ];
  return (
    <>
      <ProTable<ProductList>
        columns={columns}
        rowKey="id"
        request={async (params) => {
          console.log(params);
          const res = await getProductList(params);
          if (res.status === 200) {
            return {
              data: res.data,
              success: true,
              total: res.data.length,
            };
          }
          return [];
        }}
        toolBarRender={() => [
          <Button
            key="button"
            icon={<PlusOutlined />}
            onClick={() => {
              // actionRef.current?.reload();
              toggleShowAddProduct(true);
            }}
            type="primary"
          >
            新建
          </Button>,
        ]}
        actionRef={actionRef}
      />
      <AddProduct
        open={showAddProduct}
        onFinish={async (props) => handleAddProduct(props)}
        onCancel={() => toggleShowAddProduct(false)}
        formRef={addProductFormRef}
        initialValues={initialValues}
      />
    </>
  );
}

export default ProductList;
