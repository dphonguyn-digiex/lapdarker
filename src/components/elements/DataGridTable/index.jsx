import DataTable from 'react-data-table-component';
import './style.css';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { classifyDataToTable } from '~/utils';
import { getOrderDetail } from '~/apis/admin';
import SkeletonTable from '~/components/elements/Skeleton/SkeletonTable';
import SingleDetailOrder from '~/pages/admin/MainDashboard/MainOrders/components/SingleDetailOrder';

const ExpandedComponent = ({ data }) => {
  const token = localStorage.getItem('token');
  const [state, setState] = useState({
    data,
    loading: true
  })
  
  const handleGetDetailOrder = async () => {
    const rs = await getOrderDetail(data._id, token);

    if (rs) {
      setState({
        ...state,
        data: rs?.data || rs,
        loading: false
        })
    }

  };

  useEffect(() => {
    if(token && data) {
      handleGetDetailOrder();
    }
    // return () =>{
    //   setState({...state, data});
    // }
  }, [])
  
  console.log('state?.data',state?.data);

  const HaveOrders = () => {
    return (
      <div className ='single-order'>
          <SingleDetailOrder data={state?.data} />
      </div>
    );
  };

  return (
  <div className ="expend-detail">
      {state.loading && <SkeletonTable/>}
      {!state.loading && state.data && HaveOrders()}
  </div>
)
}

function DataGridTable({ data, getDataAllOrders }) {
  const [_data, setData] = useState({ rows: [], columns: [] });
  const [loading, setLoading] = useState(true);

  console.log('alo', data);
  useEffect(() => {
    if (data?.length !== 0) {
      setData(classifyDataToTable(data));
      console.log(classifyDataToTable(data));
    }
  }, []);

  return (
    <div>
      {loading && (
        <DataTable
          columns={_data.columns}
          data={_data.rows}
          expandableRows
          expandableRowsComponent={ExpandedComponent}
          pagination
          selectableRows
          dense
        />
      )}
    </div>
  );
}

export default DataGridTable;
