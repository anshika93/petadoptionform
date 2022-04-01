import React from "react";
import {Link} from 'react-router-dom';
export default function PetAdded(){
    return(
        <>
        
            <div className='container'>
            <div className="sidebaar"><h2>Company Logo</h2>
            <p>Dashboard</p>
            <button>Adopt a pet</button>
            </div>
         
            <div className='bodycontainer'>
             <div className='header'>Adopt a pet</div>
             <div id="addedpettext">
             <p>Added pet to the enventory</p>
             <Link to='/home' id="addedpetlink">GoToDashboard</Link>
             </div>
            </div>
            
            </div>
        
        
        </>
    )
}