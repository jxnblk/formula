
import { hcss } from 'jsxcss'
import { alpha } from './util/colors'

const CellInput = ({
  type = 'text',
  name,
  label,
  value,
  oninput,
  ...props
}) => {
  const sx = {
    root: {
    },
    label: {
      position: 'absolute',
      height: 1,
      width: 1,
      overflow: 'hidden',
      clip: 'rect(1px, 1px, 1px, 1px)'
    },
    input: {
      boxSizing: 'border-box',
      display: 'block',
      width: '100%',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      lineHeight: 1.375,
      paddingLeft: 4,
      paddingRight: 4,
      paddingTop: 4,
      paddingBottom: 4,
      margin: 0,
      backgroundColor: alpha('#07c', 1/32),
      border: 0,
      borderRadius: 0,
      boxShadow: 'none',
      appearance: 'none',
      ...props.style,
      ':focus': {
        outline: 'none',
        color: '#07c',
        backgroundColor: alpha('#07c', 1/16),
      },
      ':disabled': {
        opacity: .5
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

export default CellInput

