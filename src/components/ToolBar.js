import React from 'react';
import { Row, Col, AutoComplete } from 'antd';
import {
  HomeOutlined,
  SendOutlined,
  CompassOutlined,
  HeartOutlined,
  UserOutlined,
} from '@ant-design/icons';

import styles from './styles/ToolBar.less';

const ToolBar = () => (
  <Row className={styles.root}>
    <Col span={8}>
      <img src="/Instagram.png" alt="IG" />
    </Col>

    <Col span={8}>
      <AutoComplete className={styles.searchBar} placeholder="🔍搜尋" />
    </Col>

    <Col span={8}>
      <div className={styles.tools}>
        <HomeOutlined />
        <SendOutlined />
        <CompassOutlined />
        <HeartOutlined />
        <UserOutlined />
      </div>
    </Col>
  </Row>
);

export default React.memo(ToolBar);
