import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
      
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick =()=>{
      
      let newText = text.toLowerCase();
      setText(newText)
  }
    const handleOnChange =(event)=>{
       
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter Text Here');

  return (
    <>
    
 
   
    <div className="container">
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} id="myBox" rows='8' onChange={handleOnChange}></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert To UpperCase</button>
    <button className="btn btn-primary" onClick={handleLoClick}>Convert To LowerCase</button>
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
