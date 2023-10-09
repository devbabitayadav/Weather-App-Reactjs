import React from 'react'
import WeatherApp from './components/WeatherApp'
import { WeatherProvider } from './context/weather/WeatherContext';


const App = () => {
  return (
 
    <WeatherProvider>
        <WeatherApp/>
    </WeatherProvider>
  
  )
}

export default App;
