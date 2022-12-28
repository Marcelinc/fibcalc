import React, { useEffect, useState } from 'react'

const History = ({history}) => {

  const [list,setList] = useState([])

  useEffect(() => {
    setList(history)
  },[history])

  return (
    <div className='history-content'>
      <h3>Historia</h3>
      <div className='history-list'>
        {list.map((h,index) => <p key={index} className='history-item'>Fib({h.numb})={h.result}</p>)}
      </div>
    </div>
  )
}

export default History