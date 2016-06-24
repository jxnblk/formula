
import yo from 'yo-yo'
import h from 'hyperscript'
import Heading from './Heading'
import Input from './Input'
import Table from './Table'

const App = ({ state, setState }) => {
  const handleChange = (e) => {
    const { name, value } = e.target
    setState({ [name]: value })
  }

  const { title, height, scale } = state
  return (
    h('div', {}, [
      Heading({
        text: `${title} ${height}`
      }),
      Input({
        type: 'number',
        name: 'height',
        label: 'Height',
        value: height,
        oninput: handleChange
      }),
      Table({
        headers: [
          'font-size',
          'line-height',
          'UI height',
          'y padding'
        ],
        rows: scale.reverse().map(s => [
          s,
          state.lineHeight,
          0,
          0
        ])
      })
    ])
  )
}

export default App

