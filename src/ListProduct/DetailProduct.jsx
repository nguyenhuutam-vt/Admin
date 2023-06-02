import { Layout, theme } from "antd";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb, Menu } from "antd";
import { SidebarData } from "../Layout/SideBar";
import "./DetailP.css";
import DetailsThumb from "./DetailsThumb";
import HeaderManage from "../components/Sket/HeaderManage";
const { Header, Content, Sider } = Layout;
const DetailProduct = () => {
  const myRef = React.createRef();

  const handleTab = (index) => {
    this.setState({ index: index });
    const images = this.myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { encode } = useParams();
  console.log("asd", encode);
  useEffect(() => {
    const fecthData = async () => {
      axios
        .get(`https://dummyjson.com/products/${encode}`)
        .then((res) => {
          setListP(res.data);
        })

        .catch((err) => console.log(err));
    };
    fecthData();
  }, []);
  const [listP, setListP] = useState("");
  console.log("list1", listP);
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
            <HeaderManage title="Detail Product" subtitle="" />
            <div className="detailP">
              <div className="details" key={listP.id}>
                <div className="big-img">
                  <img src={listP.thumbnail} alt="" />
                </div>

                <div className="box">
                  <div className="row">
                    <h2>{listP.title}</h2>
                    <span>${listP.price}</span>
                  </div>
                  {/* <Colors colors={item.colors} /> */}

                  <p>{listP.description}</p>
                  <p>{listP.brand}</p>

                  <DetailsThumb images={listP.images} />
                  <button className="cart">Add to cart</button>
                </div>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DetailProduct;
