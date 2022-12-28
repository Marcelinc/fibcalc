import React from 'react'
import Nav from '../components/Nav'

const About = () => {
  return (
    <div className='container'>
        <Nav/>
        <main className='about-content'>
          <h1>O programie</h1>
          <div>
            Ciąg Fibonacciego – ciąg liczb naturalnych określony rekurencyjnie w sposób następujący: <br/>
            <span className='tabulation'>Pierwszy wyraz jest równy 0, drugi jest równy 1, każdy następny jest sumą dwóch poprzednich.</span> <br/>
            Kalkulator umożliwia wyliczenie wartości dla <strong>30</strong> pierwszych elementów
          </div>
        </main>
    </div>
  )
}

export default About