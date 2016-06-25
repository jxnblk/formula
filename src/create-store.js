
function Store (initialState = {}) {

  this._state = initialState
  this._listeners = []

  Object.defineProperty(this, 'state', {
    get () {
      return {...this._state}
    },
    set (state) {
      this._state = {
        ...this._state,
        ...state
      }
      this.update()
    }
  })

  this.setState = (s) => this.state = s

  this.update = () => {
    this._listeners.forEach(l => l(this._state))
  }

  this.subscribe = (l) => {
    if (typeof l === 'function') {
      this._listeners.push(l)
    }
  }

  return this
}

const createStore = (s) => {
  return new Store(s)
}

export default createStore

