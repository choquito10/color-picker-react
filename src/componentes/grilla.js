import React  from 'react';
import '../estilos/estilos.css'

const Grilla = ({color,setColores,colores})=>{
  
  let cuadros = Array.from({length:40})


  const cambiarColor = (i)=>(e)=>{
    e.target.style.backgroundColor = `${color}`  
    cuadros[i] = color
    if (colores.length === 0) {
      setColores([...colores,color])
    }else if (!colores.includes(color)) {
      setColores([...colores,color])
    }

  }



return( 
  <> 
    <div className='grilla'>
        {cuadros.map((e,i)=><div key={i} className='cuadrosGrilla' onClick={cambiarColor(i)}></div>)}
    </div>
  </>   
)


}


export default Grilla