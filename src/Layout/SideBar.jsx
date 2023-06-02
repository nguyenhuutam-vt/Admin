import { PieChartOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
export const SidebarData = [
  {
    label: <NavLink to="/">DashBoard</NavLink>,
    key: "1",
    icon: <PieChartOutlined />,
  },
  {
    label: <NavLink to="/about">About</NavLink>,
    key: "2",
    icon: <PieChartOutlined />,
  },
  {
    label: <NavLink to="/memeber">Memeber</NavLink>,
    key: "5",
    icon: <PieChartOutlined />,
  },
  {
    label: <NavLink to="/contact">Contacts</NavLink>,
    key: "6",
    icon: <PieChartOutlined />,
  },
  {
    label: <NavLink to="/list">List Product</NavLink>,
    key: "7",
    icon: <PieChartOutlined />,
  },
  {
    label: <NavLink to="/chart">Chart</NavLink>,
    key: "8",
    icon: <PieChartOutlined />,
  },
  {
    label: "Menu",
    key: "sub1",
    icon: <PieChartOutlined />,
    children: [
      {
        label: <NavLink to="/tom">Tom</NavLink>,
        key: "3",
        icon: <PieChartOutlined />,
      },
      {
        label: <NavLink to="/jerry">jerry</NavLink>,
        key: "4",
        icon: <PieChartOutlined />,
      },
    ],
  },
];
