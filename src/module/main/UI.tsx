import React, { FC, useEffect, useMemo, useState } from "react";
import { useAction, push, Dispatch } from "core-fe";
import { useSelector, connect } from "react-redux";
import { RootState } from "../../../type/state.interface";
import { mainActions, pageModule } from "./page";
import {
  PageContainer,
  ProCard,
  ProLayout,
  ProLayoutProps,
} from "@ant-design/pro-components";
import { route } from "../../route/layoutRoute";
import { RouterComp } from "../../route";

function Main({ changeUrl, pathname }) {
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
        pathname,
      }}
      menuItemRender={(item, dom) => (
        <div
          onClick={() => {
            changeUrl(item.path);
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
}

const mapStateToProps = (state: RootState) => {
  return {
    pathname: state.app.main.pathname,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    changeTitle: (text) => dispatch(pageModule.getActions().changeTitle(text)),
    changeUrl: (url) => dispatch(pageModule.getActions().changeUrl(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
