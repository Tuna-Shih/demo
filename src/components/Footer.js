import React from 'react';

import styles from './styles/Footer.less';

const Footer = () => {
  const data = [
    '關於',
    '使用說明',
    '新聞稿',
    'API',
    '工作機會',
    '隱私',
    '使用條款',
    '地點',
    '熱門帳號',
    '主題',
    '標籤',
    '語言',
    '© 2020FACEBOOK 旗下的 INSTAGRAM',
  ];

  return (
    <div className={styles.root}>
      <div className={styles.tag}>
        {data.map(element => (
          <a key={element}>{element}</a>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Footer);
