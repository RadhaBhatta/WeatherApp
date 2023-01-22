import React, {useEffect, useState} from 'react'
import './Forecast.css'
import {Mockdata} from './Mockdata'

const Forecast = ()=>{
const [city, setCity] = useState("");
const [data, setdata] = useState();
    useEffect(()=>{
  Mockdata.map(k=>{
    setCity(k.city.name);
    setdata(k);
    
    console.log(k)
     console.log(k.city.name);
   });
    },[])
    return(
       <div>
          <span>{city}</span>
        
        <table>
           <thead>
            <tr>
                <tbody>
                {
                       data &&  data.list.map((item) => (
                            <td>{item.dt}</td> 
                             
                               
                            
                        ))
                    }
                        </tbody>
                              
                            </tr>
                
           </thead>
        </table>
       </div>
    )
}

export default Forecast