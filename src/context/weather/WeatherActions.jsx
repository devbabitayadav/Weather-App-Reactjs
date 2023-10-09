
export const getWeather = async (cityName) => {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=38ff8663cc774f26a0a73536231307 &q=${cityName}&aqi=yes`)
    const data = await response.json()
    return data;
}