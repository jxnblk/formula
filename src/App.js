
import { hcss } from 'jsxcss'
import Heading from './Heading'
import Input from './Input'
import Table from './Table'
import CellInput from './CellInput'
import Preview from './Preview'

const App = ({ state, setState }) => {
  const handleChange = (e) => {
    const { name, value } = e.target
    setState({ [name]: value })
  }

  const handleScaleChange = (i) => (e) => {
    const { scale } = state
    const n = parseInt(e.target.value)
    scale[i] = n
    setState({ scale })
  }

  const {
    title,
    height,
    lineHeight,
    scale
  } = state

  return (
    <div>
      {Heading({ text: title })}
      {Input({
        type: 'number',
        name: 'height',
        label: 'Base Height',
        value: height,
        oninput: handleChange
      })}
      {Table({
        headers: [
          'font-size',
          'line-height',
          'UI height',
          'y padding'
        ],
        rows: scale.map((s, i) => [
          CellInput({
            type: 'number',
            name: `scale_${i}`,
            label: `Scale ${i}`,
            value: s,
            oninput: handleScaleChange(i)
          }),
          state.lineHeight,
          0,
          0
        ])
      })}
      {Preview(state)}
    </div>
  )
}

export default App

