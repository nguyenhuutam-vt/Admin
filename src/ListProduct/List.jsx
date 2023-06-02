import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, CardMedia, Container, Grid } from "@mui/material";
import {
  Form,
  Input,
  InputNumber,
  Modal,
  Popconfirm,
  Space,
  Table,
  Tag,
  Typography,
} from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import swal from "sweetalert";
const originData = [];

const List = () => {
  // const listProduct = useSelector((state) => state.list);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch.list.fecthList();
  // }, []);
  // console.log(listProduct.listProduct.products);

  // const columns = [
  //   {
  //     title: "Name",
  //     dataIndex: "title",
  //     key: "title",
  //     render: (text) => <a>{text}</a>,
  //   },
  //   {
  //     title: "Brand",
  //     dataIndex: "brand",
  //     key: "brand",
  //   },
  //   {
  //     title: "Description",
  //     dataIndex: "description",
  //     key: "description",
  //   },
  //   // {
  //   //   title: "Image",
  //   //   dataIndex: "thumbnail",
  //   //   render: () => <img src={`${}`} />,
  //   // },
  // ];
  useEffect(() => {
    const fecthData = async () => {
      axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          setListP(res.data.products);
        })

        .catch((err) => console.log(err));
    };
    fecthData();
  }, []);

  const [listP, setListP] = useState("");
  const [search, setSearch] = useState();
  console.log("asd", listP);

  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const onEditStudent = (record) => {
    setIsEditing(true);
    setEditingStudent({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingStudent(null);
  };

  function deletee(id) {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(alert("success"));
  }
  const column = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Image",
      selector: (row) => (
        <CardMedia
          image={row?.thumbnail}
          sx={{
            borderRadius: "50%",
            height: "65px",
            width: "65px",
            mb: 2,
            justifyContent: "center",
            textAlign: "center",
            border: "1px solid #e3e3e3",
          }}
        />
      ),
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <div
          className="cellAction"
          style={{ fontSize: "xx-large", fontFamily: "initial" }}
        >
          <Link
            to={`/detailProduct/${row.id}`}
            style={{ textDecoration: "none" }}
          >
            <div className="">Detail</div>
          </Link>
          <Button
            className=""
            variant="contained"
            onClick={() => {
              swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this imaginary file!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              }).then((willDelete) => {
                if (willDelete) {
                  deletee(row.id);
                } else {
                  swal("Your imaginary file is safe!");
                }
              });
            }}
            style={{ color: "red" }}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "right" }}>
        <input
          type="text"
          placeholder="Search..."
          style={{ padding: "6px 10px" }}
        />
      </div>
      <DataTable columns={column} data={listP} pagination selectableRows />
    </div>

    // <Table columns={columns} dataSource={listProduct.listProduct.products} />
  );
};

export default List;
