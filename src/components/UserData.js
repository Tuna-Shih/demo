import React from 'react';
import { Row, Col, Button } from 'antd';

import styles from './styles/UserData.less';

const UserData = () => (
  <Row className={styles.root}>
    <Col span={8} className={styles.image}>
      <img src="/memopresso.jpg" alt="memopresso" />
    </Col>

    <Col span={16}>
      <>
        <div className={styles.title}>
          <span>memopresso</span>
          <Button type="primary">追蹤</Button>
          <Button type="primary">⯆</Button>
          <Button>
            <img src="/EllipsisOutlined.png" alt="" />
          </Button>
        </div>

        <div className={styles.subtitle}>
          <span>194 貼文</span>
          <a>5154 位追蹤者</a>
          <a>225 追蹤中</a>
        </div>

        <div className={styles.article}>
          <span>MEMOPRESSO | 📌 Taiwan</span>
          <span>💌Keep your memories forever. 📍台灣✈️韓國</span>
          <span>
            <a href="https://www.instagram.com/explore/tags/memopresso/">
              #memopresso
            </a>
            分享你的列印美照✨合作事宜請洽business@memopresso.com
          </span>
          <a href="">linktr.ee/memopresso</a>
        </div>
      </>
    </Col>
  </Row>
);

export default React.memo(UserData);
