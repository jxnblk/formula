
import createStore from './create-store'

const store = createStore({
  title: 'uicalc',
  scale: [
    48,
    32,
    24,
    20,
    16,
    14,
    12
  ],
  lineHeight: 1.375,
  height: 40,
  baselineShift: 0
})

export default store

