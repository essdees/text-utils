import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import React, { useState } from 'react'
import Alert from "./components/Alert";
// import About from "./components/About";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";




function App() {

  const [mode,setmode]= useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(msg,type)=>{
      setAlert(
        {
          message:msg, 
          type:type
        }
        );
        setTimeout(() => {
          setAlert(null);
        }, 700);
  }

  const togglemode=()=>{
    if(mode==='dark'){
      setmode('light');
      document.body.style.backgroundColor='#c9c9c963';
      showAlert("Light Mode Enabled","success");
      document.title="TextUtils";
    }
    else{
      setmode('dark');
      document.body.style.backgroundColor='#202f50';
      showAlert("Night Mode Enabled","success");
      document.title="TextUtils: Night";
    }
  }





  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode}  togglemode={togglemode}/>
      <Alert alert={alert}/>
      {/* <Switch>
          <Route path="/About">
            <About mode={mode}/>
          </Route>
          <Route path="/"> */}
            <div className="container"><Textarea heading="Enter the text to analyze" showAlert={showAlert} mode={mode}/></div>
          {/* </Route>
      </Switch> */}
      
      
      {/* </Router> */}
    </>
  );
}

export default App;
