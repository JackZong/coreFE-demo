import React, { useCallback, useEffect, useRef } from "react";
import type { FC } from "react";
import { useAction, useDispatch, showLoading, useSelector } from "core-fe";
import { connect } from "react-redux";
import { RootState } from "../../../type/state.interface";
import { pageActions, pageModule } from "./page";
import {
  ActionType,
  ProFormInstance,
  ProTable,
} from "@ant-design/pro-components";
import type { ProColumnType, ProColumns } from "@ant-design/pro-components";
import { ProductList, State, productUpdating } from "./type";
import { getProductList } from "../../service";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { AddProduct } from "./components/AddProduct";

interface Props extends State {}

const ProductList: FC<Props> = ({ productUpdating }) => {
  //  const [initialValues, setInitialValues] = useState<ProductList | null>(null);
  const actionRef = useRef<ActionType>(null);

  const addProductFormRef = useRef<ProFormInstance>(null);

  const dispatch = useDispatch();

  const toggleAddModalShow = useAction(pageActions.toggleAddModalShow);

  // 直接消费state
  const state = useSelector((state: RootState) => state.app.product);

  useEffect(() => {
    // 更新商品完毕
    if (!productUpdating) {
      actionRef.current?.reload();
    }
  }, [productUpdating]);

  const handleAddProduct = useCallback((props) => {
    if (props.id) {
      dispatch(pageActions.updateProductById(props.id, { ...props }));
    } else {
      dispatch(pageActions.addProduct(props));
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
                toggleAddModalShow();
                addProductFormRef?.current?.setFieldsValue(record);
                // if (!addProductFormRef?.current) {
                //   // setInitialValues(record);
                //   setTimeout(console.log, 5000, addProductFormRef.current);
                // }
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
            onClick={toggleAddModalShow}
            type="primary"
          >
            新建
          </Button>,
        ]}
        actionRef={actionRef}
      />
      <AddProduct
        open={state.showAddModal}
        onFinish={async (props) => handleAddProduct(props)}
        onCancel={toggleAddModalShow}
        formRef={addProductFormRef}
        //initialValues={initialValues}
        loading={productUpdating}
      />
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    productUpdating: showLoading(state, productUpdating),
  };
};

export default connect(mapStateToProps)(ProductList);
