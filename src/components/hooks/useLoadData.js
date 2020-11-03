import { useState, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

import constants from '../constants';

export default () => {
  const [endCursor, setEndCursor] = useState('');
  const [data, setData] = useState([]);

  const loadData = useCallback(() => {
    if (!constants) return;

    const startIndex = !endCursor
      ? -1
      : constants.findIndex(element => element.id === endCursor);
    const gotData = constants.slice(startIndex + 1, startIndex + 4);
    if (gotData.length === 0) return;

    const lastID = gotData.length - 1;
    const newData = [...data, { dataId: uuidv4(), dataform: [...gotData] }];
    setEndCursor(gotData[lastID].id);
    setData(newData);
  }, [data, endCursor]);

  useEffect(() => {
    if (!data.length) {
      loadData();
    }

    if (data.length % 3) {
      loadData();
    }
  }, [data, loadData]);

  return { data, loadData };
};
