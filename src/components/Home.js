import React from 'react';
import { Layout } from 'antd';

import ToolBar from './ToolBar';
import UserInformation from './UserInformation';
import Footer from './Footer';
import styles from './styles/Home.less';

import './styles/Global.less';

const { Content } = Layout;

const Home = () => (
  <div className={styles.root}>
    <Layout>
      <ToolBar />
      <Content>
        <UserInformation />
      </Content>
      <Footer />
    </Layout>
  </div>
);

export default React.memo(Home);
