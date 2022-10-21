import React,{useState} from 'react'

export default function TextForm(props) {
  // This function for Uppercase
    const handleUpClick =()=>{
      
        let newText = text.toUpperCase();
        setText(newText)
    }
    // This function for Lowercase 
    const handleLoClick =()=>{
      
      let newText = text.toLowerCase();
      setText(newText)
  }
  const handleCopClick = ()=>{
    navigator.clipboard.writeText(text);
    setAl('Copied')
  }
  const handlePasClick = ()=>{
    navigator.clipboard.readText().then((clipText) => (setText(clipText)));
  }
  const handleClClick = ()=>{
    setText('')
  }

  // ................ 

    const handleOnChange =(event)=>{
       
        setText(event.target.value);
        setAl('Copy');
    }
    
    const [text, setText] = useState('Enter Text Here');
    const [copyal, setAl] = useState('Copy');

  return (
    <>
    <div className="container">
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} id="myBox" rows='8' onChange={handleOnChange}></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert To UpperCase</button>
    <button className="btn btn-primary" onClick={handleLoClick}>Convert To LowerCase</button>
    <button className="btn btn-primary" onClick={handleCopClick}>{copyal}</button>
    <button className="btn btn-primary" onClick={handlePasClick}>Paste</button>
    <button className="btn btn-primary" onClick={handleClClick}>Clear</button>
    <div >
      <h1>Your Summary</h1>
      <p>{text.split(' ').length} word and {text.length} carecters</p>
      <p>{0.008*text.split(' ').length} Minutes read</p>
      <h2>Preview:</h2>
      <p>{text}</p>
    </div>
    </div>
    
 
    </>
  )
}
