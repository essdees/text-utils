import React,{useState} from 'react'

export default function Textarea(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        settext(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        settext(newText);
        props.showAlert("Converted to Lowercase","success");
    }
    const handleClearClick=()=>{
        let newText='';
        settext(newText);
        props.showAlert("Text Cleared","danger");
    }

    const handleOnChange= (event)=>{
        settext(event.target.value)
    }

    const handleCopy=()=>{
        var text=document.getElementById("mytextarea");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success");
    }

    const [text,settext] = useState('');

    return (
        <>
            <div>
                <p className="h1 my-3" style={{color: props.mode==='light'?'black':'white'}}>{props.heading}</p>
                <div className="mb-3">
                    <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'#c9c9c963':'#222222ba' , color: props.mode==='light'?'#222222ba':'white' }} id="mytextarea" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button> 
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button> 
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy to Clipboard</button> 
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear All</button> 
            </div>
            <div style={{color: props.mode==='light'?'black':'white'}}>
            <h1 className="my-2">Text Summary</h1>
            <p>Words:{(text.length===0)?0:text.split(" ").length}  Characters:{text.length}</p>
            <p>Minutes required to read: {0.008*((text.length===0)?0:text.split(" ").length)}({0.008*text.split(" ").length*60} seconds)</p> 
            </div>
        </>
    )
}
