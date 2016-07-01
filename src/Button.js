
import { hcss } from 'jsxcss'

const Button = ({
  text,
  ...props
}) => {
  const sx = {
    display: 'inline-block',
    fontSize: 14,
    // fontWeight: 'bold',
    padding: 8,
    color: 'inherit',
    backgroundColor: 'transparent',
    border: 0,
    cursor: 'pointer',
    appearance: 'none',
    opacity: .5,
    ':hover': {
      opacity: 1
    }
  }

  return (
    <button
      style={sx}
      {...props}>
      {text}
    </button>
  )
}

export default Button
