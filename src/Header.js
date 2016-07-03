
import Select from './Select'
import {
  handleChange
} from './store'

const Header = ({ title, description, fontFamily }) => {
  const cx = {
    root: {
      marginBottom: 32
    },
    title: {
      marginBottom: 8
    },
    description: {
      marginTop: 0
    },
  }

  return (
    <header className={cx.root}>
      <h1 className={cx.title}>{title}</h1>
      <p className={cx.description}>{description}</p>
    </header>
  )
}

export default Header

