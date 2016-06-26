
import { hcss } from 'jsxcss'
import { alpha } from './util/colors'

const Select = ({
  name,
  label,
  value,
  options,
  oninput,
  hideLabel,
  big,
  ...props
}) => {
  const labelStyles = hideLabel ? {
      position: 'absolute',
      height: 1,
      width: 1,
      overflow: 'hidden',
      clip: 'rect(1px, 1px, 1px, 1px)'
    } : {
      fontSize: 12
    }

  const paddingTop = big ? 12 : 4
  const paddingBottom = paddingTop
  const arrowStyles = {
    backgroundImage: `
      linear-gradient(-45deg, transparent 50%, currentcolor 50%),
      linear-gradient(45deg, transparent 50%, currentcolor 50%)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '6px 8px',
      backgroundPosition: 'right 8px center, right 14px center'
  }

  const sx = {
    root: {
    },
    label: {
      ...labelStyles
    },
    select: {
      boxSizing: 'border-box',
      display: 'block',
      width: '100%',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      lineHeight: 1.375,
      paddingLeft: 4,
      paddingRight: 4,
      paddingTop,
      paddingBottom,
      margin: 0,
      color: 'inherit',
      backgroundColor: 'transparent',
      border: 0, //'1px solid',
      // borderColor: alpha('#000', 1/4),
      borderRadius: 2,
      boxShadow: 'none',
      appearance: 'none',
      ...arrowStyles,
      ...props.style,
      ':focus': {
        outline: 'none',
        color: '#07c',
        backgroundColor: alpha('#07c', 1/16),
      },
      ':disabled': {
        opacity: .5
      },
    }
  }

  return (
    <div style={sx.root}>
      <label htmlFor={name}
        style={sx.label}>
        {label}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        style={sx.select}
        oninput={(e) => {
          e.preventDefault()
          oninput(e)
        }}>
        {options.map((o, i) => (
          <option selected={o === value}>
            {o}
          </option>
        ))}
      </select>
    </div>
  )

}

export default Select

