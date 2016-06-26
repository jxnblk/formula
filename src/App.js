
import { hcss } from 'jsxcss'
import Header from './Header'
import Form from './Form'
import Preview from './Preview'
import ExtrasForm from './ExtrasForm'
import About from './About'
import Css from './Css'
import State from './State'
import Footer from './Footer'
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
      paddingLeft: 16,
      paddingRight: 16,
      '@media screen and (min-width: 32em)': {
        paddingLeft: 32,
        paddingRight: 32,
      },
      '@media screen and (min-width: 52em)': {
        paddingTop: 32,
        paddingLeft: 64,
        paddingRight: 64,
      }
    }
  }

  return (
    <div style={sx.root}>
      {Header(state)}
      {Form(state)}
      {Preview(state)}
      {ExtrasForm(state)}
      {About()}
      {Css(state)}
      {Footer()}
    </div>
  )
}

export default App

