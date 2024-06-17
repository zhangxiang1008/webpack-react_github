import React, { useEffect, useState } from "react";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import MenuItem from "antd/es/menu/MenuItem";
import { Outlet, useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import AliveOutlet from "../components/aliveOutlets/index";
import { useLocation } from "react-router-dom";
import fpsWatcher from "../utils/fpsWatcher";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuProps["items"] = [
  getItem("Navigation One", "", <MailOutlined rev={undefined} />, [
    getItem("双列布局", "index"),
    getItem("hoc", "index2"),
    getItem("三列布局", "threeCol"),
    getItem("剧中布局", "middle"),
  ]),
  getItem("Navigation Two", "sub2", <AppstoreOutlined rev={undefined} />),
];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

export let lastRouter = "";
export let currentRouter = "";

export default function Root() {
  const location = useLocation();
  let navigate = useNavigate();
  currentRouter = location.pathname;
  const [selected, setselected] = useState<string[]>();
  const onClick: MenuProps["onClick"] = (e) => {
    navigate({
      pathname: e.key,
    });
    lastRouter = currentRouter;
    currentRouter = e.key;
  };
  useEffect(() => {
    // fpsWatcher();
  }, []);

  useEffect(() => {
    const arr = location.pathname.split("/");
    setselected(arr.splice(arr.length - 1, 1));
  }, [location]);

  return (
    <div className={styles.page}>
      <div id="sidebar" className={styles.sidebar}>
        <Menu onClick={onClick} style={{ width: 256 }} selectedKeys={selected} mode="inline" items={items} />
      </div>
      <div id="detail" className={styles.right}>
        <div className={styles.navbar}></div>
        <div className={styles.content}>
          <AliveOutlet />
        </div>
      </div>
    </div>
  );
}
