import { statusOrder } from "~/utils/contants";
import { useState } from 'react';
import './style.css'

export const SelectStateOrder = props => {
  
  const { type , selectedStatus} = props;
  const [ state,setState ] = useState(type)
  const listState = Object.keys(statusOrder);

  const onChangeStatus = (value) =>{
    setState(value)
    selectedStatus && selectedStatus(value)
  }

  return (
    <>
      <select value={state} name={statusOrder?.[type]} onChange={(e)=>{onChangeStatus(e.target.value)}} className='select' disabled ={state === 'DELIVERED' ? true:false} > 
        {listState?.map((s, index) => {
            return (
            <option className="selected" key={index} value={s}>{statusOrder?.[s]}</option>
            )
        })}
      </select>
    </>
  );
};


