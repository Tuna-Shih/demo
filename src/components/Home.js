import React from 'react';

import ToolBar from './ToolBar';
import UserInformation from './UserInformation';
import Footer from './Footer';
import './styles/Global.less';

const Home = () => (
  <>
    <ToolBar />
    <UserInformation />
    <Footer />
  </>
);

export default React.memo(Home);
