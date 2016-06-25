
import { hcss } from 'jsxcss'

const Input = ({
  type = 'text',
  name,
  label,
  value,
  oninput,
  ...props
}) => {
  const sx = {
    root: {
      marginBottom: 16
    },
    label: {
      display: 'block',
      fontSize: 12,
      marginBottom: 4
    },
    input: {
      boxSizing: 'border-box',
      display: 'block',
      width: '100%',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      lineHeight: 1.375,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
      paddingBottom: 8,
      margin: 0,
      border: '1px solid',
      borderColor: '#ccc',
      borderRadius: 2,
      boxShadow: 'none',
      appearance: 'none',
      ':focus': {
        outline: 'none',
        color: '#07c',
        borderColor: '#07c',
      },
      '::-webkit-inner-spin-button': {
        appearance: 'none'
      },
      '::-webkit-outer-spin-button': {
        appearance: 'none'
      }
    }
  }

  return (
    <div style={sx.root}>
      <label htmlFor={name}
        style={sx.label}>
        {label}
      </label>
      <input
        {...props}
        type={type}
        name={name}
        id={name}
        value={value}
        style={sx.input}
        oninput={oninput} />
    </div>
  )
}

export default Input

