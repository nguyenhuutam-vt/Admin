import { Breadcrumb, Form, Layout, Menu, theme } from "antd";
import React, { useEffect, useState } from "react";

import {
  DesktopOutlined,
  FileOutlined,
  LaptopOutlined,
  NotificationOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Dashboard from "./Dashboard";
import { Grid } from "@mui/material";
import { TotalOrderLineChartCard } from "./TotalOrderLineChartCard";
import TotalIncomeDarkCard from "./TotalIncomeDarkCard";
import TotalIncomeLightCard from "./TotalIncomeLightCard";
import TotalGrowthBarChart from "./TotalGrowthBarChart";
import PopularCard from "./PopularCard";
import { NavLink } from "react-router-dom";
import { Sidebar, SidebarData } from "./SideBar";
import Headerr from "../Header/Headerr";
import { useDispatch, useSelector } from "react-redux";

const { Header, Content, Sider } = Layout;
const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    const item3 = [
      {
        key: <NavLink to="/">Home</NavLink>,
      },
      { key: <NavLink to="/">Home</NavLink> },
    ];
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: item3.map((j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `${j.key}`,
        };
      }),
    };
  }
);
// const item3 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
//   (icon, index) => {
//     return{

//     }
//   }
// );

// const item3 = [
//   {
//     key: "DashBoard",
//     icon: <UserOutlined />,
//     path: <NavLink to="/">Home</NavLink>,
//   },
//   {
//     key: "DashBoard",
//     icon: <UserOutlined />,
//     path: <NavLink to="/">Home</NavLink>,
//   },
// ];
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
// const items = [
//   getItem("Option 1", "1", <PieChartOutlined />),
//   getItem("Option 2", "2", <DesktopOutlined />),
//   getItem("User", "sub1", <UserOutlined />, [
//     getItem("Tom", "3"),
//     getItem("Bill", "4"),
//     getItem("Alex", "5"),
//   ]),
//   getItem("Team", "sub2", <TeamOutlined />, [
//     getItem("Team 1", "6"),
//     getItem("Team 2", "8"),
//   ]),
//   getItem("Files", "9", <FileOutlined />),
// ];
const Admin = () => {
  const usersStore = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch.users.fetchUsers();
  }, []);
  console.log("asd", usersStore.listUser);

  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      {/* <Headerr /> */}

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
                  <Grid item lg={4} md={6} sm={6} xs={12}>
                    <Dashboard isLoading={isLoading} />
                  </Grid>
                  <Grid item lg={4} md={6} sm={6} xs={12}>
                    <TotalOrderLineChartCard isLoading={isLoading} />
                  </Grid>
                  <Grid item lg={4} md={12} sm={12} xs={12}>
                    <Grid container spacing={3}>
                      <Grid item sm={6} xs={12} md={6} lg={12}>
                        <TotalIncomeDarkCard isLoading={isLoading} />
                      </Grid>
                      <Grid item sm={6} xs={12} md={6} lg={12}>
                        <TotalIncomeLightCard isLoading={isLoading} />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={8}>
                    <TotalGrowthBarChart isLoading={isLoading} />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <PopularCard isLoading={isLoading} />
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

export default Admin;
