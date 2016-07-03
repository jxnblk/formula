
import Form from './Form'
import Preview from './Preview'
import ExtrasForm from './ExtrasForm'
import About from './About'
import Css from './Css'
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

  const cx = {
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
    },
    about: {
      '@media screen and (min-width:64em)': {
        display: 'inline-block',
        verticalAlign: 'top',
        boxSizing: 'border-box',
        width: '75%',
        paddingRight: 32
      }
    },
    css: {
      '@media screen and (min-width:64em)': {
        display: 'inline-block',
        verticalAlign: 'top',
        width: '25%',
        marginTop: 48
      }
    }
  }

  return (
    <div className={cx.root}>
      {Form(state)}
      {Preview(state)}
      {ExtrasForm(state)}
      <div>
        <div className={cx.about}>
          {About()}
        </div>
        <div className={cx.css}>
          {Css(state)}
        </div>
      </div>
      {Footer()}
    </div>
  )
}

export default App

