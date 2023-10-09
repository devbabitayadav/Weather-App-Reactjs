import { createContext, useReducer } from "react";
import WeatherReducer from "./WeatherReducer";

const WeatherContext = createContext()


export const WeatherProvider = ({children})=>{
const initialState = {
    weatherData :{
         "location": {
        "name": "Indore",
        "region": "Madhya Pradesh",
        "country": "India",
        "lat": 22.72,
        "lon": 75.83,
        "tz_id": "Asia/Kolkata",
        "localtime_epoch": 1696743425,
        "localtime": "2023-10-08 11:07"
        },
        "current": {
        "last_updated_epoch": 1696743000,
        "last_updated": "2023-10-08 11:00",
        "temp_c": 29,
        "temp_f": 84.2,
        "is_day": 1,
        "condition": {
        "text": "Mist",
        "icon": "//cdn.weatherapi.com/weather/64x64/day/143.png",
        "code": 1030
        },
        "wind_mph": 5.6,
        "wind_kph": 9,
        "wind_degree": 300,
        "wind_dir": "WNW",
        "pressure_mb": 1016,
        "pressure_in": 30,
        "precip_mm": 0,
        "precip_in": 0,
        "humidity": 48,
        "cloud": 0,
        "feelslike_c": 30,
        "feelslike_f": 86.1,
        "vis_km": 5,
        "vis_miles": 3,
        "uv": 7,
        "gust_mph": 7,
        "gust_kph": 11.2,
        "air_quality": {
        "co": 297.1,
        "no2": 1.6,
        "o3": 110.2,
        "so2": 2,
        "pm2_5": 48.8,
        "pm10": 70,
        "us-epa-index": 3,
        "gb-defra-index": 6
        }
        }
        },
}

const [state , dispatch] = useReducer(  WeatherReducer,initialState)

    return(
        <WeatherContext.Provider value={{...state , dispatch}} >
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherContext;