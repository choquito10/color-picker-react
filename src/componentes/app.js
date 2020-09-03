import React, { useState } from 'react';
import Grilla from './grilla'
import Input from './input'
import '../estilos/estilos.css'

const App = ()=>{

const [color,setColor] = useState('#ffffff') 
const [colores,setColores] = useState([])

const colorAntiguo = (e)=>{
  setColor(e.target.value)
}

  return(
    <>
    <Input setColor={setColor} color={color}/>
    <div className='divInputs'>
     {colores.map((e,i)=><input key={i} type='color' onChange={()=>''} value={e} onClick={colorAntiguo} className='inputColor'/>)} 
    </div>
    <Grilla color={color} setColores={setColores} colores={colores}/> 

    </>
  )
}

export default App  