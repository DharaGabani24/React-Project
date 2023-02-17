import React, {useState} from 'react'

export default function Textform(props) {
    //Converting TExt to Upper Case
    const handleUpperCaseClick = () => {
      //console.log("clicked uppercase buttons");
      let newText = text.toUpperCase();
      setText(newText);
    }
    //converting text to Lower Case
    const handleLowerCaseClick = () => {
       //console.log("you clicked lower case");
       let lc = text.toLowerCase();
       setText(lc);
    }

    //Remove space
    const handleRemoveSpaces = () => {
      let rs = text.replace(/\s+/g,'').trim();
      setText(rs);
  }
    //clear
    const handleClear = () =>{
      let ct = ('');
      setText(ct);
    } 

    //copy text
  const handleCopy= () =>{
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
     
  }
   
  // remove extra spaces
  const handleRemoveExtraSpaces= () => {
    let netext = text.split(/[ ] + /);
    setText(netext.join(" "))
  }

    const handleOnChange = (event) => {
      //console.log("on change");
      setText(event.target.value);
    }
    //useState
    const[text, setText] = useState('');

  return (
    <>
    <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="mybox" value={text} onChange={handleOnChange} rows="5"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpperCaseClick}>Convert to upper case</button>
            <button className="btn btn-primary mx-2" onClick={handleLowerCaseClick}>Convert to Lower case</button>
            <button className="btn btn-primary" onClick={handleRemoveSpaces}>Remove space</button>
            <button className="btn btn-primary mx-2" onClick={handleClear}>Clear text</button>
            <button className="btn btn-primary " onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary mx-2" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>

    </div>
     <div className='container my-3'>
      <h1>Text summary</h1>
      <p>No. of characters {text.length} and No. of words {text.split(" ").length}</p>
      <p>{0.008 * text.split(" ").length} minutes to read </p>
      <h2>Preview</h2>
      <p>{text}</p>
     </div>
     </>
       )
}
