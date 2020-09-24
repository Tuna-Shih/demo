import React from 'react';

import UserData from './UserData';
import styles from './styles/UserInformation.less';

const UserInformation = () => (
  <div className={styles.root}>
    <UserData />
  </div>
);

export default React.memo(UserInformation);
