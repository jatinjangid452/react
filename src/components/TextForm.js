import React, {useState } from 'react';

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLoClick=()=>{
        console.log("lowercase was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText)
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    const handleOnChange=(event)=>{
        console.log("on change")
       setText(event.target.value)
    }
    const [text, setText]= useState('');
return(
    <>
<div className="container">
    <h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>


</div>
<div className="container my-3">
    <h2>your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Mintues read</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>
</>
    )
}