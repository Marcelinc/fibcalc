import React, { useState } from 'react'
import Calc from '../components/Calc'
import History from '../components/History'
import Nav from '../components/Nav'


const Dashboard = () => {

  const [history,setHistory] = useState([])

  return (
    <div className='container'>
        <Nav/>
        <main>
            <Calc list={history} setHistory={setHistory}/>
            <History history={history}/>
        </main>
    </div>
  )
}

export default Dashboard