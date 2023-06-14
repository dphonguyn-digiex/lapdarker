import React, { useState, useEffect } from 'react';
import { fetchDevices } from '~/apis/client/index';
import { classifyDataToTable } from '~/utils';

export const useGetLapTop = type => {
  const [_data, setData] = useState({ rows: [], columns: [] });

  const getDataLaptop = async () => {
    const response = await fetchDevices(type);
    console.log('response', response);
    if (response) {
      setData(classifyDataToTable(response));
    }
  };

  console.log('_data', _data);

  useEffect(() => {
    getDataLaptop();
  }, [type]);

  return { data: _data, refetch: getDataLaptop };
};
