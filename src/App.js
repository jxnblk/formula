
import { hcss } from 'jsxcss'
import Heading from './Heading'
import Form from './Form'
import ExtrasForm from './ExtrasForm'
import Header from './Header'
import Preview from './Preview'
import Css from './Css'
import State from './State'
import { red, alpha } from './util/colors'


const App = (store) => {
  const { state, setState } = store
  const {
    title,
    description,
    lineHeight,
    scale,
    border,
    pad
  } = state

  const sx = {
    root: {
      paddingLeft: 32,
      paddingRight: 32
    }
  }

  return (
    <div style={sx.root}>
      {Header(state)}
      {Form(state)}
      {Preview(state)}
      {ExtrasForm(state)}
      {Css(state)}
      {State(state)}
    </div>
  )
}

export default App

