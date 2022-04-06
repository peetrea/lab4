import React from 'react';
import { Layout, Menu} from 'antd';

const { Header } = Layout;

const Layout_content = () =>{
    return(
        <Layout>
          <Header className="header">
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
              <Menu.Item key="4">nav 4</Menu.Item>
              <Menu.Item key="5">nav 5</Menu.Item>
              <Menu.Item key="6">nav 6</Menu.Item>
              <Menu.Item key="7">nav 7</Menu.Item>
              <Menu.Item key="8">nav 8</Menu.Item>
              <Menu.Item key="9">nav 9</Menu.Item>
              <Menu.Item key="10">nav 10</Menu.Item>
            </Menu>
          </Header>
        </Layout>
      )
}
export default Layout_content;