
import { hcss } from 'jsxcss'
import Box from './Box'
import Heading from './Heading'
import Input from './Input'
import Table from './Table'
import CellInput from './CellInput'
import Preview from './Preview'
import Css from './Css'
import { red, alpha } from './util/colors'

const handleChange = (e, store) => {
  const { setState } = store
  const { name, value } = e.target
  const n = e.target.type === 'number' ? parseFloat(value) : null
  setState({ [name]: n || value })
}

const handleScaleChange = (e, {
  state,
  setState
}, i) => {
  const { scale } = state
  const n = parseInt(e.target.value)
  scale[i] = n
  setState({ scale })
}

const handleHeightChange = (e, {
  state,
  update,
  setState
}, i) => {
  e.preventDefault()
  // To do: account for border
  const { value } = e.target
  const { scale, border, lineHeight } = state
  const fs = scale[i]
  const n = parseFloat(value)
  const px = (n - fs * lineHeight - border * 2) / 2
  const pad = px / fs

  if (!isNaN(pad) && pad > 0) {
    setState({ pad })
  } else {
    update()
  }
}

const App = (store) => {
  const { state, setState } = store
  const {
    title,
    lineHeight,
    scale,
    border,
    pad
  } = state

  const getHeight = (s) => {
    return s * lineHeight + (pad * 2 * s) + (border * 2)
  }

  const sx = {
    root: {
      paddingLeft: 32,
      paddingRight: 32
    }
  }

  return (
    <div style={sx.root}>
      {Heading({ text: title })}
      {Table({
        fixed: true,
        headers: [
          'Font Size',
          'UI Height',
          'Line Height',
          'Y Padding (em)',
          'Border',
        ],
        rows: scale.map((s, i) => {
          const nonInt = getHeight(s) % 1 > 0
          return {
            style: {},
            data: [
              CellInput({
                type: 'number',
                name: `scale_${i}`,
                label: `Scale ${i}`,
                value: s,
                oninput: (e) => {
                  handleScaleChange(e, store, i)
                }
              }),
              CellInput({
                type: 'number',
                name: `height_${i}`,
                label: `Height ${i}`,
                value: getHeight(s),
                oninput: (e) => handleHeightChange(e, store, i),
                style: {
                  color: nonInt ? red : null,
                  backgroundColor: nonInt ? alpha(red, 1/8) : null
                }
              }),
              CellInput({
                type: 'number',
                name: 'lineHeight',
                label: 'Line Height',
                value: lineHeight,
                oninput: (e) => {
                  handleChange(e, store)
                },
                min: 1.25,
                max: 2,
                step: 1/32
              }),
              CellInput({
                type: 'number',
                name: 'pad',
                label: `Padding ${i}`,
                value: pad,
                oninput: (e) => handleChange(e, store),
                min: 0,
                max: 3,
                step: 1/64
              }),
              CellInput({
                type: 'number',
                name: 'border',
                label: 'Border',
                value: border,
                oninput: (e) => handleChange(e, store),
                min: 0,
                max: 8
              })
            ]
          }
        })
      })}
      {Preview({
        ...state,
        getHeight
      })}
      <hr />
      {Css(state)}
    </div>
  )
}

export default App

