import {
  ProSchema,
  BetaSchemaForm,
  ProFormColumnsType,
  ProFormProps,
} from "@ant-design/pro-components";
import React from "react";
import { ProductList } from "../type";
import { getCategoryList } from "../../../service/product";
import { ModalProps } from "antd";

const columns: ProFormColumnsType<ProductList>[] = [
  {
    title: "id",
    dataIndex: "id",
    formItemProps: {
      hidden: true,
    },
    transform: (val) => {
      return { id: val };
    },
  },
  {
    title: "产品名称",
    valueType: "text",
    dataIndex: "name",
    formItemProps: {
      rules: [
        {
          required: true,
        },
      ],
    },
  },
  {
    title: "描述",
    valueType: "textarea",
    dataIndex: "description",
  },
  {
    title: "类别",
    dataIndex: "category",
    valueType: "select",
    request: async () => {
      const res = await getCategoryList();
      return res.data.map((item) => ({ label: item.name, value: item.id }));
    },
  },
  {
    title: "标签",
    dataIndex: "tags",
    valueType: "select",
  },
  {
    title: "图片链接",
    dataIndex: "image_url",
    valueType: "image",
    initialValue: "http://dummyimage.com/400x400",
  },
  {
    title: "价格",
    dataIndex: "price",
    valueType: "money",
    width: "100%",
  },
];

const AddProduct: React.FC<Partial<ProFormProps & ModalProps>> = ({
  onFinish,
  open,
  onCancel,
  initialValues,
  formRef,
}) => {
  return (
    <BetaSchemaForm<ProductList>
      columns={columns}
      layoutType="ModalForm"
      open={open}
      width={600}
      onFinish={onFinish}
      modalProps={{
        onCancel: onCancel,
        destroyOnClose: true,
      }}
      // initialValues={initialValues}
      formRef={formRef}
    />
  );
};

export { AddProduct };
