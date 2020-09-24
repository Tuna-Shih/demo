import React from 'react';

import styles from './styles/UserInformation.less';

const UserInformation = () => (
  <div className={styles.root}>
    <img src="/memopresso.jpg" alt="memopresso" />

    <div></div>
  </div>
);

export default React.memo(UserInformation);
