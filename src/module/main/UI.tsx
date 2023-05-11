import React from "react";
import type { FC } from "react";
import { useSelector } from "core-fe";
import { useDispatch } from "react-redux";
import { RootState } from "../../../type/state.interface";
import { pageActions } from "./page";
import { PageContainer, ProLayout } from "@ant-design/pro-components";
import { route } from "../../route/layoutRoute";
import { RouterComp } from "../../route";

const Main: FC<{}> = () => {
  const state = useSelector((state: RootState) => state.app.main);

  const dispatch = useDispatch();
  return (
    <ProLayout
      bgLayoutImgList={[
        {
          src: "https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png",
          left: 85,
          bottom: 100,
          height: "303px",
        },
        {
          src: "https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png",
          bottom: -68,
          right: -45,
          height: "303px",
        },
        {
          src: "https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png",
          bottom: 0,
          left: 0,
          width: "331px",
        },
      ]}
      route={route}
      location={{
        pathname: state.pathname,
      }}
      menuItemRender={(item, dom) => (
        <div
          onClick={() => {
            //  changeUrl(item.path);
            dispatch(pageActions.changeUrl(item.path));
          }}
        >
          {dom}
        </div>
      )}
    >
      <PageContainer>
        <RouterComp />
      </PageContainer>
    </ProLayout>
  );
};

export default Main;
