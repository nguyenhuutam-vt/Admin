import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { SidebarData } from "../Layout/SideBar";
import Sider from "antd/es/layout/Sider";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Button, TextField, useMediaQuery } from "@mui/material";
import HeaderManage from "../components/Sket/HeaderManage";
import { Formik } from "formik";
import * as yup from "yup";
const UpdateProduct = () => {
  const [updateP, setUpdateP] = useState("");
  const { encode } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const data = {
    title,
    description,
  };

  const Submit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    fetch(`https://dummyjson.com/products/${encode}`, {
      method: "PUT" /* or PATCH */,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => {
        // window.location.reload();
        alert("Success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const fecthData = async () => {
      axios
        .get(`https://dummyjson.com/products/${encode}`)
        .then((res) => {
          setUpdateP(res.data);
          setTitle(res.data.title);
          setDescription(res.data.description);
        })

        .catch((err) => console.log(err));
    };
    fecthData();
  }, []);

  const handleFormSubmit = (values) => {
    console.log(values);
  };
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const isNonMobile = useMediaQuery("(min-width:600px)");

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
            <Box m="20px">
              <HeaderManage
                title="Update Product"
                subtitle="Create a New User Profile"
              />

              <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={checkoutSchema}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                }) => (
                  <form onSubmit={Submit}>
                    <Box
                      display="grid"
                      gap="30px"
                      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                      sx={{
                        "& > div": {
                          gridColumn: isNonMobile ? undefined : "span 4",
                        },
                      }}
                    >
                      <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Name"
                        onBlur={handleBlur}
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        name="firstName"
                        error={!!touched.firstName && !!errors.firstName}
                        helperText={touched.firstName && errors.firstName}
                        sx={{ gridColumn: "span 2" }}
                      />
                      <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Description"
                        onBlur={handleBlur}
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        name="lastName"
                        error={!!touched.lastName && !!errors.lastName}
                        helperText={touched.lastName && errors.lastName}
                        sx={{ gridColumn: "span 2" }}
                      />
                    </Box>
                    <Box display="flex" justifyContent="end" mt="20px">
                      <Button
                        type="submit"
                        color="secondary"
                        variant="contained"
                      >
                        Update
                      </Button>
                    </Box>
                  </form>
                )}
              </Formik>
            </Box>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};
export default UpdateProduct;
