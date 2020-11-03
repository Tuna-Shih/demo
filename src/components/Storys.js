import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './styles/Storys.less';

const Storys = () => {
  const data = [
    { id: uuidv4(), image: '/cat.jpg', article: 'cat' },
    { id: uuidv4(), image: '/cat.jpg', article: 'cat' },
    { id: uuidv4(), image: '/cat.jpg', article: 'cat' },
    { id: uuidv4(), image: '/cat.jpg', article: 'cat' },
    { id: uuidv4(), image: '/cat.jpg', article: 'cat' },
    { id: uuidv4(), image: '/cat.jpg', article: 'cat' },
    { id: uuidv4(), image: '/cat.jpg', article: 'cat' },
  ];

  return (
    <div className={styles.root}>
      {data.map(element => (
        <div key={element.id} className={styles.imageWithText}>
          <img src={element.image} />
          <span>{element.article}</span>
        </div>
      ))}
    </div>
  );
};

export default React.memo(Storys);
