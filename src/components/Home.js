import React from 'react';

import ToolBar from './ToolBar';

const Home = () => (
  <>
    <ToolBar />
    <p>account</p>
    <p>pictures</p>
  </>
);

export default React.memo(Home);
