import React from 'react';
import '../estilos/estilos.css'

const Input = ({setColor,color})=>{

const colorInput = (e)=>{
    setColor(e.target.value)
    e.target.value = color
}
      return( 
          <input className='inputColor' type='color' value={color} onChange={colorInput} />
      )
}


export default Input