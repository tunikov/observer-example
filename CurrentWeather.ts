import { Screen, Observer } from './interfaces'

export default class CurrentWeather implements Screen, Observer {
  temp: number
  hum: number
  constructor(temp = 0, hum = 0) {
    this.temp = temp
    this.hum = hum
  }

  update(newTemp: number, newHum: number) {
    this.hum = newHum
    this.temp = newTemp
    this.display()
  }

  display() {
    console.log(`
    ${new Date(Date.now()).toTimeString()}
    ТЕКУЩАЯ ПОГОДА:
    Температура: ${this.temp},
    Влажность: ${this.hum}%.
    `)
  }
}
