import React from 'react';

import useLoadData from './hooks/useLoadData';
import useHandleScroll from './hooks/useHandleScroll';
import styles from './styles/BreadcrumbAndImage.less';

const BreadcrumbAndImage = () => {
  const { data, loadData } = useLoadData();

  useHandleScroll(loadData);

  return (
    <>
      <div className={styles.breadcrumb}>
        <a>貼文</a>
        <a>已標註</a>
      </div>

      {data.map(({ dataId, dataform }) => (
        <div className={styles.image} key={dataId}>
          {dataform.map(({ id, image }) => (
            <img key={id} src={image} />
          ))}
        </div>
      ))}
    </>
  );
};

export default React.memo(BreadcrumbAndImage);
