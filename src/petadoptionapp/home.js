import React from "react";
import CommonPage from "./common";
import {Link} from 'react-router-dom'
export default function Homepage(){
    function handledelete(id){
        const dlt =JSON.parse(localStorage.getItem("pets")).filter((indx)=>{
            return id.name!==indx.name;
        });
            
        
        localStorage.setItem("pets", JSON.stringify(dlt));
        
    }
    function handleedit(id){
    //  const edtdata = JSON.parse(localStorage.getItem("pets")).filter((indx)=>{
    //      return id===indx
    //  })
    //  localStorage.setItem("pets", JSON.stringify(edtdata));
    }
    let pets = localStorage.getItem("pets");
    if(pets===null){
        pets=[];
    }else{
        pets = JSON.parse(pets);
    }
    return(
        <>
            <div className='container'>
            <div className="sidebaar"><h2>Company Logo</h2>
            <p>Dashboard</p>
            <button id="adoptpettext">Adopt a pet</button>
            </div>
         
            <div className='bodycontainer'>
             <div className='header'>Adopt new pet
             <div id="addpettext">
             
             <Link to='/addapet' >addpet</Link>
             </div>
             </div>
             
             <div id="pet-details"><h2>Pet Details</h2></div>
             <table className="table">
                 <tr className="tr">
                     <td className="td">s.no</td>
                     <td className="td">name</td>
                     <td className="td">givenname</td>
                     <td className="td">price</td>
                     <td className="td">Action</td>
                     
                 </tr>
                 
                 {
                     pets.map((x,index)=>{
                         return(
                             
                                <tr className="tr" key={index} >
                                    <td className="td">{index}</td>
                                    <td className="td">{x.Name}</td>
                                    <td className="td">{x.givenName}</td>
                                    <td className="td">{x.price}</td>
                                    <td className="td">
                                        <button  className="edt-dlt-btn" onClick={()=>{handleedit(index)}}>Edt</button>
                                        <button  className="edt-dlt-btn" onClick={()=>{handledelete(index)}}>dlt</button>
                                    </td>
                                </tr>
                             
                         )
                     })
                 }
                 </table>
                 
             </div>
            
            </div>
            
            {/* <CommonPage/> */}
          
            
        </>
    )
}