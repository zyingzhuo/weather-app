import React, { useState, useEffect } from 'react';
import Each from './forecasteach';


function WeatherPage(){


const [data, setData]=useState()
const [day, setDay]=useState('')
const [max, setMax]=useState()
const [min, setMin]=useState()



const[forecast,setForecast]=useState()
const[filtered, setFiltered]=useState()

useEffect(()=>{
 const getdata=async()=>{
   const res=  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=austin&appid=3c0c608bad95e537b9e974de45b9e0c6`)
//    console.log(res.weather) 
   if (res.ok) {
        const data=await res.json()
      
        setData(data)

        let max=parseInt(data.main.temp_max-273.15)
        setMax(max)

        let min=parseInt(data.main.temp_min-273.15)
        setMin(min)


        let date=data.dt
        let a= new Date(date*1000)
        const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        let dayofweek=days[a.getDay()]
        setDay(dayofweek)
    }
}

getdata();
    },[])

useEffect(()=>{
   const getforecast=async()=>{
       const res=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=austin&appid=3c0c608bad95e537b9e974de45b9e0c6`)
       if (res.ok) {
           const forecast=await res.json()
         
            setForecast(forecast)
              
            let allforecast=forecast?.list

           let filteredcast=allforecast.filter((oneforecast,i)=>{
                return i===0 || i===6 || i===16 || i===23 || i===30
           })

           setFiltered(filteredcast)

           }
           
        }

   getforecast()
},[])

    // const allforecast=forecast.list

    //        let filteredcast=allforecast.filter((oneforecast,i)=>{
    //             return i===0 || i===6 || i===16 || i===23 || i===30
    //        })

    //        setFiltered(filteredcast)
       

// let images=['https://openweathermap.org/img/wn/01n@2x.png', 'https://openweathermap.org/img/wn/01n@2x.png','https://openweathermap.org/img/wn/04n@2x.png','https://openweathermap.org/img/wn/03n@2x.png','https://openweathermap.org/img/wn/01n@2x.png']

return (
    <>
     <div style={{display:'flex'}}>
     <div>
       <h2>{day}</h2>
       <img src="https://openweathermap.org/img/wn/01d@2x.png"/>
       <div style={{display:'flex'}}>
        <h1>{max}{'\u00b0'}</h1>
        <h1 style={{marginLeft:'4%'}}>{min}{'\u00b0'}</h1>
        </div>
        </div>
        <div style={{display:'flex'}}>
        {filtered?.map((singleforecast,i)=>(
            <>
            {/* <h1>min temp {singleforecast.main.temp_min}</h1>
            <h1>max temp {singleforecast.main.temp_max}</h1>
            <h1>{singleforecast.dt}</h1>
            <h1>{singleforecast.weather[0].icon}</h1>
            <img src={images[i]}></img> */}
            <Each singleforecast={singleforecast}/>
            </>
        )
            
             
        )}
        </div>
    </div>
    </>

)
}


export default WeatherPage