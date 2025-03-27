import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Weather = () => {
    const[city,setCity]=useState("");
    const[weatherdata,setWeatherdata]=useState(null);
    function handlechange(e){
        setCity(e.target.value);
    }
    function handlesubmit(){
        try{
            axios({
                method:'get',
                url:`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'d8447a2cd8c6dc5d6f6db205d08ea963'}`
            }).then((res)=>{
                setWeatherdata(res.data);
            })
        }catch(error){
            console.log("error fatching weather error",error);
        } 
    }
  return (
    <div className='container-fluid d-flex justify-content-center'>
        <div className='rounded-3 bg-info mt-3 p-5 '>
            <h1>Weather</h1>
            <input type="text"
              placeholder='Enter city Name'
              value={city} name='cityname'
              onChange={handlechange} />
            <br/>
            <button onClick={handlesubmit} className='btn btn-primary mt-1 btn-hover'>Click</button>
            {weatherdata && (<><div>
                <h3>{weatherdata.name}</h3>
                <p>Temp is {weatherdata.main.temp}</p>
                <p>feel like {weatherdata.main.feels_like}</p>
                <p>{weatherdata.weather[0].description}</p>
            </div>
            </>)}
        </div> 
    </div>
  )
}
export default Weather
