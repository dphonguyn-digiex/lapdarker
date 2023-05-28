import React from 'react'
import { SiZalo } from 'react-icons/si'

function Zalo() {
  return (
    <div style={{ width: '56px', height: '56px', backgroundColor: '#0068ff', borderRadius: 999,display: 'flex', justifyContent: 'center', alignItems: 'center',margin: '6px 0 6px 0', cursor: 'pointer' }}>
      <SiZalo color='#fff' size={32}/>
    </div>
  )
}

export default Zalo