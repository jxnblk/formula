
import createStore from './create-store'

const store = createStore({
  title: 'uicalc',
  scale: [
    // 48,
    // 32,
    24,
    20,
    16,
    14,
    12
  ],
  lineHeight: 1.375,
  pad: 0.5625,
  paddingTop: 0.5625,
  paddingBottom: 0.5625,
  border: 0,
  baselineShift: 0
})

export default store

