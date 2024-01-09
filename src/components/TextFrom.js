import React,{useState} from 'react'

export default function TextFrom(props) {
    const handleUpClick = ()=>{
        console.log('Click into Uppercase.');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase','success')
    }
    const handleLowClick = ()=>{
        console.log('Click into Uppercase.');
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to LowerCase','success')
    }
    const handleCopyClick =()=>{
        // alert('Helooooo')
        // var text = document.getElementById("myBox")
        // text.select()
        navigator.clipboard.writeText(text)
        //props.showAlert(" Copy Code Success.","success")
        //navigator.clipboard.writeText('Copy this text to clipboard')
        props.showAlert('Copy Text','success')
        
    }
    const handleClearClick =()=>{
        // console.log("UpperCase Click....")
        let newText = ''
        setText(newText)
        //props.showAlert(" Clear Code Success.","success")
        props.showAlert('Clear Text','success')
    }
    const handleOnChange = (event)=>{
       setText(event.target.value);
    }
    const [text, setText] = useState('Enter Tour Text Here...');
  return (
    <div style={{color:props.mode==='dark'?'white':'black'}}>
        <h2 >{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="5"></textarea>
        </div>
        <div className= "container my-3"> 
              <button disabled={text.length===0}className= "btn btn-primary mx-2 my-2" onClick={handleUpClick} >Convert to UpperCase</button>
              <button disabled={text.length===0} className= "btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to LowerCase</button>
              <button disabled={text.length===0} className= "btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy Text</button>
              <button disabled={text.length===0} className= "btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
              
        </div>

    </div>
  )
}
