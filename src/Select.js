
import { hcss } from 'jsxcss'
import h from 'hyperscript'
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
      backgroundColor: 'transparent',
      // backgroundColor: alpha('#07c', 1/32),
      border: '1px solid',
      borderColor: alpha('#000', 1/4),
      borderRadius: 2,
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
    }
  }

  return (
    h('div', [
      h('label', { style: sx.label }, label),
      h('select', {
        name,
        value,
        style: sx.select,
        oninput: (e) => {
          e.preventDefault()
          oninput(e)
        }
      },
        options.map(o => (
          h('option', {
            selected: o === value
          }, o)
        ))
      )
    ])
  )

  /*
   * to do: figure out select issues in hyperscript
  return (
    <div style={sx.root}>
      <label htmlFor={name}
        style={sx.label}>
        {label}
      </label>
      <select
        {...props}
        name={name}
        id={name}
        value={value}
        onchange={(e) => {
          console.log('input', e)
          oninput(e)
        }}>
        {options.map((o, i) => (
          <option>
            {o}
          </option>
        ))}
      </select>
    </div>
  )
  */

}

export default Select

