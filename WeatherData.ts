import { Observer, Subject, Screen } from './interfaces'
export default class WeatherData implements Subject {
  observers: Observer[]
  temperature: number
  humidity: number
  constructor(temperature: number, humidity: number) {
    this.observers = []
    this.temperature = temperature
    this.humidity = humidity
  }

  registerObserver(newObserver: Observer) {
    this.observers.push(newObserver)
  }
  removeObserver(observerToBeRemoved: Observer) {}

  notifyObservers() {
    this.observers.forEach((o) => o.update(this.temperature, this.humidity))
  }

  measurmentsChanged(newTemperature: number, newHumidity: number) {
    this.temperature = newTemperature
    this.humidity = newHumidity
    this.notifyObservers()
  }
}
