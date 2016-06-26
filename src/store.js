
import createStore from './create-store'
import pkg from '../package.json'
import { getParams } from './location'

const initialState = getParams()

const store = createStore({
  title: 'Formula',
  description: pkg.description,
  fontFamily: '-apple-system, sans-serif',
  scale: [
    16,
    24,
    20,
    14,
    12
  ],
  lineHeight: 1.5,
  pad: 0.25,
  baselineShift: 0,
  padX: .625,
  border: 0,
  borderRadius: 4,
  proportionalBorderRadius: false,
  showAllElements: false,
  ...initialState,
  getHeight (s) {
    const { lineHeight, pad, border } = store.state
    return s * lineHeight + (pad * s * 2) + (border * 2)
  }
})

export const padding = {
  get top () {
    const { pad, baselineShift } = store.state
    return pad + baselineShift
  },
  get bottom () {
    const { pad, baselineShift } = store.state
    return pad - baselineShift
  }
}

// Actions
export const handleChange = (e) => {
  const { setState } = store
  const { name, value } = e.target
  const n = e.target.type === 'number' && !/\.$/.test(e.target.value)
    ? +value : null
  setState({ [name]: typeof n === 'number' ? n : value })
}

export const handleToggle = (e) => {
  const { setState } = store
  const { name, checked } = e.target
  setState({ [name]: checked })
}

export const handleScaleChange = (e, i) => {
  const { state, setState } = store
  const { scale } = state
  const n = +e.target.value
  scale[i] = n
  setState({ scale })
}

export const handleHeightChange = (e, i) => {
  e.preventDefault()
  const { state, update, setState } = store
  const { value } = e.target
  const { scale, border, lineHeight, baselineShift } = state
  const fs = scale[i]
  const n = parseFloat(value)
  const px = (n - fs * lineHeight - border * 2) / 2
  const pad = px / fs

  if (!isNaN(pad)) {
    setState({
      pad
    })
  } else if (value.length === 0) {
    return
  } else {
    update()
  }
}

export const handleBaselineChange = (e) => {
  const { state, setState } = store
  const { pad } = state
  const { value } = e.target
  const n = parseFloat(value)
  console.log('baseline', n)
  if (!isNaN(n)) {
    setState({
      baselineShift: n,
    })
  }
}

export const addFontSize = () => {
  const { state, setState } = store
  const { scale } = state
  scale.push(16)
  setState({ scale })
}

export const removeFontSize = (i) => {
  const { state, setState } = store
  const { scale } = state
  scale.splice(i, 1)
  setState({ scale })
}

export default store

