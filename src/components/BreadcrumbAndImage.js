import React from 'react';
import { Button } from 'antd';

import useLoadData from './hooks/useLoadData';
import styles from './styles/BreadcrumbAndImage.less';

const BreadcrumbAndImage = () => {
  const { data, loadData } = useLoadData();

  return (
    <>
      <div className={styles.breadcrumb}>
        <a>貼文</a>
        <a>IGTV</a>
        <a>已標註</a>
      </div>

      {data.map(({ dataId, dataform }) => (
        <div className={styles.image} key={dataId}>
          {dataform.map(({ id, image }) => (
            <img key={id} src={image} />
          ))}
        </div>
      ))}

      <div className={styles.loadMore}>
        <Button onClick={loadData}>Load More</Button>
      </div>
    </>
  );
};

export default React.memo(BreadcrumbAndImage);
