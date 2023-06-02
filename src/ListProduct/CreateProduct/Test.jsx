import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Test = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
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
  console.log(categorie);

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem key={categorie} value={categorie}>
          {categorie}
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default Test;
