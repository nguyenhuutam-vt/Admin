import { Breadcrumb, Layout, Menu, theme } from "antd";
import React, { useEffect, useState } from "react";
import { SidebarData } from "../Layout/SideBar";
import List from "./List.jsx";
import HeaderManage from "../components/Sket/HeaderManage";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const { Header, Content, Sider } = Layout;
const ListProduct = () => {
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
            {" "}
            <HeaderManage title="Product" subtitle="List Product" />
            <Button>
              <NavLink to="/createProduct">Add New Product</NavLink>
            </Button>
            <List />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default ListProduct;
