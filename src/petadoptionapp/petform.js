import React from 'react';
import {Link} from 'react-router-dom'
export default function Petform(){
    const[name, setName]=React.useState();
    const[givenName, setgivenName]=React.useState();
    const[price, setPrice]=React.useState();
    const[subscriptionoption, setSubscriptionoption]=React.useState("lifetime")
    const[namedata, setNamedata]= React.useState([]);
    const[givennamedata, setGivennamedata]= React.useState([]);
    const[pricedata, SetPricedata]= React.useState([]);

    function handlenext(){
    localStorage.setItem("name",name);
    localStorage.setItem("givenname",givenName);
    localStorage.setItem("price",price);
    localStorage.setItem("subs", subscriptionoption)
    }
    function handlesubscriptionchange(e){
      setSubscriptionoption(e.target.value);
    }
    function handlename(e){
        const Name = e.target.value;
        setName(Name);
    }
    function handlegivenname(e){
        const givenname = e.target.value;
        setgivenName(givenname);
    }
    function handleprice(e){
        const price = e.target.value;
        setPrice(price)
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
             <div ><h4 id='petadoptiontext'>Add pet for adoption</h4></div>
             
             <form action="" className="form">
             <div className='form-tag'>
                 <div >
                     <div className="btn"><input type="radio" value="lifetime" checked={subscriptionoption==="lifetime"} onChange={handlesubscriptionchange}/>own for lifetime</div>
                     <div className="btn" ><input type="radio" value="one-year" checked={subscriptionoption==="one-year"} onChange={handlesubscriptionchange}/>own for one year</div>
                     
                 </div>
                 <div  className='lable'>
                 <label>Name </label>
                 </div>
                   <div >  
                <input className="inputfields" type="text" placeholder='Breed of pet' onChange={handlename}/>
                 </div>
                 <div className='lable'>
                 <label >Given Name </label>
                 </div>
                 <div >
                <input className="inputfields" type="text" placeholder='Custom name of the pet'  onChange={handlegivenname}/>
                 </div>
                 <div  className='lable'>
                 <label>Price </label>
                 </div>
                 <div >
                <input className="inputfields" type="text" placeholder='Price the pet'  onChange={handleprice}/>
                 </div>
                 <div className="btn">
                     <Link  to='/nextbutton' onClick={handlenext}>Next</Link>
                 </div>
                 <div className="btn">
                     <Link to='/cancelbutton'>Cancel</Link>
                 </div>
                 
                 </div>
             </form>
            
             </div>
        
        
             </div>
        </>
    )
}