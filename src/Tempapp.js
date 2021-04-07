import react, { useEffect, useState } from 'react';

import photo from './climate.jpg'
function Tempapp() {
    const [city, setcity] = useState("pune");
    const [temp, settemp] = useState("");
    const [weather, setweather] = useState("")


    useEffect(() => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b4da287e8f8403c2ea1c37bccb98e5bd`;
        fetch(url)
            .then((res) => { return res.json() })
            .then((data) => { console.log(data); settemp(data.main); setweather(data.weather[0]) })

            .catch((err) => { console.log(err); settemp(null) });
    }, [city])

    return (
        <div className="card container pt-3 w-50 mt-5 rounded shadow-lg p-4 mb-4 bg-white  "  style={{backgroundImage: `url(${photo})`}}   >
            <div className="card-body" >
                <div >
                    <div>
                        <h1 className="card-title  text-center shadow p-4 mb-4  bg-light">Weather App</h1>
                        <h5 className="mt-5 text-secondary">Enter City name here</h5>

                        <input type="text" onChange={(event) => { console.log(event.target.value); setcity(event.target.value) }} />
                    </div>
                </div>
                {!temp ? (<h1 className="text-secondary">data not found</h1>) :
                    (<div className="card-text text-light">

                        <div>
                            <h1>
                                Location = {city}
                            </h1>
                            <h1>Current temp = {Math.round(temp.temp - 273.15)} °C</h1>
                            <h1>Min temp = {Math.round(temp.temp_min - 273.15)} °C</h1>
                            <h1>Max temp = {Math.round(temp.temp_max - 273.15)} °C</h1>
                            <h1>Humidity = {temp.humidity} </h1>
                            <h1>Weather = {weather.main} </h1>
                            <h1>Weather description = {weather.description} </h1>
                        </div>
                    </div>)}

            </div>
           

        </div>
    )
}
//    api.openweathermap.org/data/2.5/weather?q={city name}&appid=b4da287e8f8403c2ea1c37bccb98e5bd

export default Tempapp;