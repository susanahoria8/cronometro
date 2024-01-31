import './Button.css';


export default function Button() {
  function presionarButton(e) {
    e.target.style.transform = 'scale(0.95)';
    setTimeout(function() {
      e.target.style.transform = 'scale(1)';
  }, 100);
  }

  return (
    <>
	     <div className="bt">
        <button id="btn" onClick={(e) => presionarButton(e)}>Iniciar</button>
       </div>

    	     
    </>
  )
}