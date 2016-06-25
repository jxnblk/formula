
import createStore from './create-store'
// import pkg from '../package.json'

const store = createStore({
  title: 'Formula',
  description: 'Bulletproof form and button styles that always line up',
  scale: [
    16,
    24,
    20,
    14,
    12
  ],
  lineHeight: 1.375,
  pad: 0.5625,
  paddingTop: 0.5625,
  paddingBottom: 0.5625,
  padX: .5,
  border: 1,
  borderRadius: 4,
  baselineShift: 0,
  showAllElements: false,
  getHeight (s) {
    const { lineHeight, pad, paddingTop, paddingBottom, border } = store.state
    return s * lineHeight + (paddingTop * s) + (paddingBottom * s) + (border * 2)
  }
})

// Actions
export const handleChange = (e) => {
  const { setState } = store
  const { name, value } = e.target
  const n = e.target.type === 'number' && !/\.$/.test(e.target.value)
    ? parseFloat(value) : null
  setState({ [name]: n || value })
}

export const handleScaleChange = (e, i) => {
  const { state, setState } = store
  const { scale } = state
  const n = parseInt(e.target.value)
  scale[i] = n
  setState({ scale })
}

export const handleHeightChange = (e, i) => {
  e.preventDefault()
  // To do: account for border
  const { state, update, setState } = store
  const { value } = e.target
  const { scale, border, lineHeight, baselineShift } = state
  const fs = scale[i]
  const n = parseFloat(value)
  const px = (n - fs * lineHeight - border * 2) / 2
  const pad = px / fs
  const paddingTop = pad + baselineShift
  const paddingBottom = pad - baselineShift
  console.log(paddingTop, paddingBottom)

  // if (!isNaN(pad) && pad > 0) {
  if (!isNaN(paddingTop) && !isNaN(paddingBottom)) {
    setState({
      pad,
      paddingTop,
      paddingBottom
    })
  } else if (value.length === 0) {
    // To do: handle blank values
    return
    // setState({ pad: 0 })
  } else {
    update()
  }
}

export const handlePaddingChange = (e) => {
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
      paddingTop: pad + n,
      paddingBottom: pad - n
    })
  }
}


export default store

