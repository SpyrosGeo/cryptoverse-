import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons/";

import icon from "../images/clogo.png";

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Crypto</Link>
        </Typography.Title>
        {/* <Button className="menu-control-conmtainer"></Button> */}
        <Menu theme="dark">
            <Menu.Item icon={<HomeOutlined/>}>
                <Link to="/"></Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined/>}>
                <Link to="/cryptocurrencies"></Link>
            </Menu.Item>
            <Menu.Item icon={<MoneyCollectOutlined/>}>
                <Link to="/exchanges"></Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined/>}>
                <Link to="/news"></Link>
            </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default NavBar;
