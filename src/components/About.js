import React from 'react'
import logo from './icon.png';

function About(props) {
    return (
        <>
        <div className="container">
            <div className="row my-5">
                <div className="col-2"><img  src={logo} alt="Generic placeholder" width="164"height="164"/></div>
                <div className="col-10" style={{color: props.mode==='light'?'#222222ba':'white'}}>
                    <h1 >About TextUtils</h1>
                    <h5>It is a text based utility website.</h5>
                </div>
            </div>
        
        </div>
       
       </>
    )
}

export default About
