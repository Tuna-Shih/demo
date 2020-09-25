import React from 'react';

import UserData from './UserData';
import Storys from './Storys';
import BreadcrumbAndImage from './BreadcrumbAndImage';
import styles from './styles/UserInformation.less';

const UserInformation = () => (
  <div className={styles.root}>
    <UserData />
    <Storys />
    <BreadcrumbAndImage />
  </div>
);

export default React.memo(UserInformation);
