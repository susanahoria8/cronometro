import './Head.css';
import inicioSound from './click.mp3';
export default function Head({ oval, cua, onClick, text}) {

     const handleClick = (e) => {
        onClick();
        presionarContainer(e);
        reproducirSonido();
      }
        
   function presionarContainer(e) {
    e.target.style.transform = 'translate(0px, 15px)';
    setTimeout(function() {
      e.target.style.transform = 'scale(1)';
  }, 100);
  }

  function reproducirSonido() {
    const audio = new Audio(inicioSound);
    audio.play();
  }

  return (
    <>
    	<div className="container" >
        <div className="text">{text}</div>

	    	<div style={{width: oval}}className="ovalo" onClick={handleClick}>

	    	</div>

	    	<div style={{width: cua}} className="cuadro">

	    	</div>

    	</div>  
        
    </>
  )
}
