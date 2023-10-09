import React, { useContext, useState } from 'react'
import search_icon from '../assets/search.png'
import wind_icon from '../assets/wind.png'
import humidity_icon from '../assets/humidity.png'
import WeatherContext from '../context/weather/WeatherContext'
import { getWeather } from '../context/weather/WeatherActions'


const WeatherApp = () => {
    const { weatherData, dispatch } = useContext(WeatherContext);

    const [text, setText] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = await getWeather(text)
        dispatch({
            type: "GET_WEATHER",
            payload: data
        })
        setText("")
    }


    return (

        <>
            <div className="container" data-aos="flip-left" >
                <form className="top-bar" onSubmit={handleSubmit} >
                    <input value={text} type="text" className="cityInput" placeholder='Search' onChange={(e) => setText(e.target.value)} />
                    <button className="search-icon" data-aos="flip-left">
                        <img src={search_icon} alt="" />
                    </button>
                </form>

                <div className="weather-image" data-aos="fade-up">
                    <img src={weatherData.current.condition.icon} alt="" />
                </div>
                <div className="weather-temp" data-aos="fade-up">{weatherData.current.temp_c} °c</div>
                <div className="weather-location" data-aos="fade-up">
                    {weatherData.location.name}
                </div>
                <div className="data-container" data-aos="fade-up">
                    <div className="element">
                        <img src={humidity_icon} alt="" className='icon' />
                        <div className="data">
                            <div className="humidity-percent">
                                {weatherData.current.humidity}%
                            </div>
                            <div className="text">
                                Humidity
                            </div>
                        </div>
                    </div>

                    <div className="element">
                        <img src={wind_icon} alt="" className='icon' />
                        <div className="data">
                            <div className="wind-rate">
                                {weatherData.current.wind_kph} km/h
                            </div>
                            <div className="text">
                                Wind Speed
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherApp;
