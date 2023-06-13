import { Button, Typography } from '@mui/material';
import { IoMdAdd } from 'react-icons/io';
import { createContext } from 'react';

import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
import SkeletonTable from '~/components/elements/Skeleton/SkeletonTable';
import DataGridTable from '~/components/elements/DataGridTable';
import { fetchAllOrdersOfCusomers } from '~/apis/admin';

import { useGetAllOrders } from '~/hook'; 

function MainOrders() {
  const [ordersFetch, setOrdersFetch] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  // const { data: listOrders, refetch: refecthOrder} = useGetAllOrders();

  const DataContext = createContext(null);
  const getData = async () => {
    setLoading(true);
    const data = await fetchAllOrdersOfCusomers();
    console.log('123', data);
    if (data) {
      setOrdersFetch(data);
    }
  };

  React.useEffect(() => {
    getData()
      .then(() => setLoading(false))
      .catch(err => setLoading(false));
  }, []);

  return (
    <DataContext.Provider value={{ refecthOrder: null }}> 
      <div className=''>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: '28px', fontWeight: 'bold' }}>Đơn hàng</Typography>
        </div>
        <div style={{ height: '520px', width: '95%', padding: '24px 0', margin: '0' }}>
          {!loading ? <DataGridTable data={ordersFetch}/> : <SkeletonTable />   }
        </div>
    </div>
    </DataContext.Provider>
  );
}

export default MainOrders;
