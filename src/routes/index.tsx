import React from 'react'
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import MenuItem from 'antd/es/menu/MenuItem'
import { Outlet, useNavigate } from 'react-router-dom'
import styles from './index.module.scss'

type MenuItem = Required<MenuProps>['items'][number]

const items: MenuProps['items'] = [
  getItem('Navigation One', '', <MailOutlined rev={undefined} />, [
    getItem('Option 1', 'index'),
    getItem('Option 2', 'index2')
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined rev={undefined} />)
]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem
}

export default function Root() {
  let navigate = useNavigate()

  const onClick: MenuProps['onClick'] = (e) => {
    navigate({
      pathname: 'index'
    })
  }
  return (
    <div className={styles.page}>
      <div id="sidebar" className={styles.sidebar}>
        <Menu
          className={styles.memu}
          onClick={onClick}
          style={{ width: 256 }}
          mode="inline"
          items={items}
        />
      </div>
      <div id="detail" className={styles.right}>
        <div className={styles.navbar}></div>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
