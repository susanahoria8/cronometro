import './Base.css';
import Head from './Head.jsx';
import Button from './Button.jsx';
import React, { useState, useEffect } from 'react';



export default function Base() {
	const [tiempo, setTiempo] = useState(0);
  	const [corriendo, setCorriendo] = useState(false);

			  useEffect(() => {
		    let intervalo;

		    if (corriendo) {
		      intervalo = setInterval(() => {
		        setTiempo((prevTiempo) => prevTiempo + 1);
		      }, 1000);
		    } else {
		      clearInterval(intervalo);
		    }

		    return () => {
		      clearInterval(intervalo);
		    };
		  }, [corriendo]);

		  const toggleCronometro = () => {
		    setCorriendo((prevCorriendo) => !prevCorriendo);
		  };

		  const reiniciar = () => {
		    setTiempo(0);
		    setCorriendo(false);
		  };


  return (
    <>
    	<div className= "container">
    		<Head onClick={reiniciar} oval="120px" cua="50px" text="Reiniciar"/>
	    	<div className="Base">
	    		<div className= "Display">
	    			<h2>{tiempo}</h2>
	    		
	    		</div>

	    	</div>

    	</div>
      	<div className= "small">
	    		<Head onClick={toggleCronometro} oval="60px" cua="25px" text="Iniciar" />

	    </div>
      
        
    </>
  )
}

