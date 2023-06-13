import { useEffect, useState } from 'react';
import { fetchAllOrdersOfCusomers } from '~/apis/admin';

function useRefetchAllOrders() {
  const [state, setState] = useState();
  
  const getData = async () => {
    const { data } = await fetchAllOrdersOfCusomers(localStorage.getItem('token'));
    console.log('run hook');
    return data;
  };
  
  useEffect(()=>{
    setState(getData)
  },[])

  return  {data:state,  refetch:getData()}
}

export default useRefetchAllOrders;
