import { Screen, Observer } from './interfaces'

export default class Forecast implements Observer, Screen {
  temperature: number
  humidity: number
  constructor(temp: number, hum: number) {
    this.temperature = temp
    this.humidity = hum
  }
  update(newTemperature: number, newHumidity: number) {
    this.display(newTemperature, newHumidity)
    this.temperature = newTemperature
    this.humidity = newHumidity
  }
  display(newTemp: number, newHum: number) {
    let tempStatus, humStatus
    if (newTemp < this.temperature) tempStatus = 'снижается'
    if (newTemp > this.temperature) tempStatus = 'растет'
    if (newTemp === this.temperature) tempStatus = 'без изменений'
    if (newHum < this.humidity) humStatus = 'снижается'
    if (newHum > this.humidity) humStatus = 'растет'
    if (newHum === this.humidity) humStatus = 'без изменений'
    console.log(`
    ПРОГНОЗ:
    Темрература ${tempStatus},
    Влажность ${humStatus}.
    ----------------------------
    `)
  }
}
