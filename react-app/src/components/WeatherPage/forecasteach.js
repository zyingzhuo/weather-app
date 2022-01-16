import React, { useState, useEffect } from 'react';


function Each({singleforecast}){
const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const[forecastday, setforecastday]=useState(days[(new Date(singleforecast.dt*1000)).getDay()])
const[forecastmax, setforecastmax]=useState(parseInt(singleforecast.main.temp_max-273.15))
const[forecastmin, setforecastmin]=useState(parseInt(singleforecast.main.temp_min-273.15))
const[forecastpic,setforecastpic]=useState(`https://openweathermap.org/img/wn/${singleforecast.weather[0].icon}@2x.png`)
console.log(singleforecast)
// const min=singleforecast.main.temp_min-273.15
// setforecastmin(min)

// const max=singleforecast.main.temp_max-273.15
// setforecastmax(max)

    return (
        <>
        <div style={{marginLeft:'30%'}}>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <h2>{forecastday}</h2>
                    <img src={forecastpic} style={{}}></img>
                </div>
                <div style={{display:'flex'}}>
                    <h1>{forecastmin}{'\u00b0'}</h1>
                    <h1 style={{marginLeft:'53px'}}>{forecastmax}{'\u00b0'}</h1>
                </div>
        </div>
        </>
    )






}

export default Each