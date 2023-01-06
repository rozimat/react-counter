import React, {useState} from 'react'
import "../css/Header.css";



function Header() {
  const [ addnumber, setAddnumber] = useState(0);
  function addNumber1(){
    setAddnumber(addnumber+1)
  }
  function addNumber2(){
    setAddnumber(addnumber-1)
  }
  function addNumber3(){
    setAddnumber(addnumber*5)
  }
  function addNumber4(){
    setAddnumber(addnumber-addnumber)
  }
  return (
    <div className='counter'>
      <h1>Counter</h1>
      <p>{addnumber}</p>
      <button onClick={addNumber1}> qo'shish</button>
      <button onClick={addNumber2}> ayirish</button>
      <button onClick={addNumber3}> ko'paytirish</button>
      <button onClick={addNumber4}> yangilash</button>
    </div>
  )
}

export default Header
