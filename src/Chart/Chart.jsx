import { Breadcrumb, Layout, Menu, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import React, { useEffect, useState } from "react";
import { SidebarData } from "../Layout/SideBar";
import { Content } from "antd/es/layout/layout";
import { Grid } from "@mui/material";
import Dashboard from "../Layout/Dashboard";
import ChartTokenPrice from "./ChartTokenPrice";
import ChartMoneyAllocation from "./ChartMoneyAllocation";
import PopularCard from "../Layout/PopularCard";
import Profit from "./Profit";

const Chart = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={SidebarData}
          ></Menu>
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <ChartTokenPrice aspect={2 / 0.5} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <ChartMoneyAllocation aspect={2 / 0.5} />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Profit />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Chart;
