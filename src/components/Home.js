import React from 'react';

import ToolBar from './ToolBar';
import UserInformation from './UserInformation';

const Home = () => (
  <>
    <ToolBar />
    <UserInformation />
    <p>footer</p>
  </>
);

export default React.memo(Home);
