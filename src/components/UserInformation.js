import React from 'react';

import UserData from './UserData';
import Storys from './Storys';
import styles from './styles/UserInformation.less';

const UserInformation = () => (
  <div className={styles.root}>
    <UserData />
    <Storys />
  </div>
);

export default React.memo(UserInformation);
