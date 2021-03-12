export interface Subject {
  registerObserver: (newObserver: Observer) => void
  removeObserver: (observerToBeRemoved: Observer) => void
  notifyObservers: Function
  observers: Observer[]
}

export interface Observer {
  update: Function
}

export interface Screen {
  display: Function
}
