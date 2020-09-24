import React from 'react';

import UserInformation from './UserInformation';

const Home = () => (
  <>
    <p>menu</p>
    <UserInformation />
    <p>footer</p>
  </>
);

export default React.memo(Home);
