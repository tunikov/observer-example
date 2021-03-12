import WeatherData from './WeatherData'
import Forecast from './Forecast'
import CurrentWeather from './CurrentWeather'

const weatherData = new WeatherData(0, 90)
const forecast = new Forecast(0, 0)
const currentWeather = new CurrentWeather()

weatherData.registerObserver(currentWeather)
weatherData.registerObserver(forecast)

weatherData.measurmentsChanged(2, 87)
weatherData.measurmentsChanged(5, 83)
weatherData.measurmentsChanged(1, 95)
