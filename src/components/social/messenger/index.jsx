import React from 'react'
import { TbBrandMessenger } from 'react-icons/tb'

function Messenger() {
  return (
    <div style={{ cursor: 'pointer', width: '56px', height: '56px', backgroundColor: '#2239ff', borderRadius: 999,display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '6px 0 6px 0' }}>
      <TbBrandMessenger color='#fff' size={28}/>
    </div>
  )
}

export default Messenger