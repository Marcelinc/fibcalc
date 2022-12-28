import React, { useEffect, useState } from 'react'

const Calc = ({list,setHistory}) => {

  const [numb,setNumb] = useState(null)
  const [message,setMessage] = useState('')


 const calcFib = async () => {
    setMessage('Calculating...')
    if(numb && numb >= 0 && numb < 31){
      let result = null
      result = calculate(numb)

      //save result
      setHistory([{numb,result},...list])

      if(result || result === 0)
        setMessage('Wynik: '+result)
    } else
      setMessage('Incorrect value')
  }

  useEffect(() => {
    setMessage('')
  },[numb])

  return (
    <div className='calc-content'>
        <h1>Kalkulator Fibonacciego</h1>
        <p>By Marcin Cieśla</p>
        <p>Gr. 2.1</p>
        <div id='calc-input'>
          <input id='fib-numb' onChange={e => setNumb(e.target.value)}/>
          <button onClick={calcFib}>Licz</button>
        </div>
        {(message || message === 0) && <p className='message'>{message}</p>}
    </div>
  )
}


function calculate(numb){
  let result = 'Problem with calculating'
  if(numb === 0 || numb === '0'){
    result=0
  }
  if(numb === 1 || numb === '1'){
    result=1
  }
  if(numb > 1){
    result = calculate(numb-1)+calculate(numb-2)
  }
  return result
}



export default Calc