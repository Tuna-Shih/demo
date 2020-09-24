import React from 'react';

import UserInformation from './UserInformation';

const Home = () => (
  <>
    <p>menu</p>
    <UserInformation />
    <p>pictures</p>
  </>
);

export default React.memo(Home);
