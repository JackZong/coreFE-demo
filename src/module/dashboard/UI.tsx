import React from "react";
import { Statistic, Card, Row, Col } from "antd";
import { useSelector } from "core-fe";
import { RootState } from "../../../type/state.interface";

const Dashboard = () => {
  const total = useSelector((state: RootState) => state.app.dashboard.total);
  return (
    <>
      <Row>
        <Col span={8}>
          <Card>
            <Statistic title="当前商品总数" value={total} />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
