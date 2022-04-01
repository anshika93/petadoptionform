import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'
export default function PetImage(){
    const[images, setImages]=React.useState([]);
    const[imageurl, setImageurl]=React.useState([]);
    useEffect(()=>{
        const newImageURLs =[]
        images.forEach(image => newImageURLs.push(URL.createObjectURL(image)));
        setImageurl(newImageURLs);
    },[images])
    function handleimagechange(e){
      setImages([...e.target.files])
    }
    function handlesave(){
       const Name= localStorage.getItem("name");
       const givenName=  localStorage.getItem("givenname");
       const price=  localStorage.getItem("price");
       const subscriptiondata= localStorage.getItem("subs");
       const pet ={
           Name,
           givenName,
           price,
           subscriptiondata,
           imageurl
       }
       let pets =localStorage.getItem("pets");
       
       if(pets===null){
        pets=[];
    }else{
        pets = JSON.parse(pets);
    }
       pets.push(pet);
       localStorage.setItem("pets", JSON.stringify(pets));

    }
    return(
        <>
        <div className='container'>
            <div className="sidebaar"><h2>Company Logo</h2>
            <p>Dashboard</p>
            <button id="adoptpettext">Adopt a pet</button>
            </div>
         
            <div className='bodycontainer'>
             <div className='header'>Adopt a pet</div>
             <div id="addimagetext">
                 <p>Add image for the pet</p>
                 <img src="logo.jpg"></img>
                 <br></br>
                 <input id="choseimagetext" type="file" multiple accept='image/*' onChange={handleimagechange}></input>
                 {
                     imageurl.map((x)=>{
                         return(
                             <img src={x}></img>
                         )
                     })
                 }
                
                 </div>
             <div className="savetext"><Link to='/save' onClick={handlesave}>Save</Link></div>
             <div className="savetext"><Link to='/back' >Back</Link></div>
             </div>
        </div>
        </>
    )
}