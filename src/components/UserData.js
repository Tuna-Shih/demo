import React from 'react';
import { Row, Col, Button } from 'antd';

import styles from './styles/UserData.less';

const UserData = () => (
  <Row className={styles.root}>
    <Col span={8} className={styles.image}>
      <img src="/cat.jpg" alt="cat" />
    </Col>

    <Col span={16}>
      <>
        <div className={styles.title}>
          <span>cat</span>
          <Button type="primary">追蹤</Button>
          <Button type="primary">⯆</Button>
        </div>

        <div className={styles.subtitle}>
          <span>100 貼文</span>
          <a>100 位追蹤者</a>
          <a>100 追蹤中</a>
        </div>

        <div className={styles.article}>
          <span>I am a cat.</span>
        </div>
      </>
    </Col>
  </Row>
);

export default React.memo(UserData);
