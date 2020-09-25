import React from 'react';

import ToolBar from './ToolBar';
import UserInformation from './UserInformation';
import Footer from './Footer';
import styles from './styles/Home.less';
import './styles/Global.less';

const Home = () => (
  <div className={styles.root}>
    <ToolBar />
    <UserInformation />
    <Footer />
  </div>
);

export default React.memo(Home);
