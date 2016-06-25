
import { hcss } from 'jsxcss'
import Heading from './Heading'
import Form from './Form'
import Preview from './Preview'
import Css from './Css'
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
      <h1>{title}</h1>
      <p>{description}</p>
      {Form(state)}
      {Preview({
        ...state,
        getHeight
      })}
      {Css(state)}
    </div>
  )
}

export default App

