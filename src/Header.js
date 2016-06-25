
import { hcss } from 'jsxcss'
import Select from './Select'
import {
  handleChange
} from './store'

const Header = ({ title, description, fontFamily }) => {
  const sx = {
    root: {},
    title: {
      marginBottom: 0
    },
    description: {
      marginTop: 0
    },
  }

  return (
    <header style={sx.root}>
      <h1 style={sx.title}>{title}</h1>
      <p style={sx.description}>{description}</p>
    </header>
  )
}

export default Header

