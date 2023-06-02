import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  TextField,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import HeaderManage from "../../components/Sket/HeaderManage";
import { Formik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Select } from "antd";
const Create = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const data = {
    title,
    description,
  };

  const [categorie, setCategori] = useState("");

  useEffect(() => {
    const fecthData = async () => {
      axios
        .get("https://dummyjson.com/products/categories")
        .then((res) => {
          setCategori(res.data);
        })

        .catch((err) => console.log(err));
    };
    fecthData();
  }, []);
  console.log("asd", categorie);

  const Submit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", data.title); //append the values with key, value pair
    formData.append("description", data.description);
    fetch("https://dummyjson.com/products/add", {
      method: "POST",
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

  return (
    <Box m="20px">
      <HeaderManage
        title="CREATE Product"
        subtitle="Create a New User Profile"
      />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        <form onSubmit={Submit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Name"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              name="firstName"
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              name="lastName"
              sx={{ gridColumn: "span 2" }}
            />
            {/* <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={categorie}
                label="Age"
              >
                {" "}
                <MenuItem value={categorie}></MenuItem>
              </Select> */}

            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Age
                </InputLabel>
                <NativeSelect
                  defaultValue={30}
                  inputProps={{
                    name: "age",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
              </FormControl>
            </Box>
          </Box>
          <Box display="flex" justifyContent="end" mt="20px">
            <Button type="submit" color="secondary" variant="contained">
              Create New User
            </Button>
          </Box>
        </form>
      </Formik>
    </Box>
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
export default Create;
