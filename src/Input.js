
import { alpha } from './util/colors'

const Input = ({
  type = 'text',
  name,
  label,
  value,
  oninput,
  hideLabel,
  big,
  suffix,
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

  const cx = {
    root: {
      position: 'relative',
    },
    label: {
      ...labelStyles
    },
    input: {
      boxSizing: 'border-box',
      display: 'block',
      width: '100%',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      lineHeight: 1.375,
      paddingLeft: 4,
      paddingRight: 4, // suffix ? (suffix.length * 6) : 4,
      paddingTop,
      paddingBottom,
      margin: 0,
      overflow: 'hidden',
      backgroundColor: 'transparent',
      border: 0,
      borderRadius: 0,
      boxShadow: 'none',
      MozAppearance: 'none',
      WebkitAppearance: 'none',
      ...props.className,
      ':focus': {
        outline: 'none',
        color: '#07c',
        backgroundColor: alpha('#07c', 1/16),
      },
      ':disabled': {
        opacity: .5
      },
      ':read-only': {
        color: 'inherit',
        backgroundColor: alpha('#000', 1/32)
      },
      '::-webkit-inner-spin-button': {
        WebkitAppearance: 'none'
      },
      '::-webkit-outer-spin-button': {
        WebkitAppearance: 'none'
      }
    },
    suffix: {
      position: 'absolute',
      right: 4,
      bottom: 7,
      fontSize: 12,
      opacity: .5,
      '@media screen and (max-width: 40em)': {
        display: 'none'
      }
    }
  }

  const noAuto = {
    autoComplete: 'off',
    autoCorrect: 'off',
    autoCapitalize: 'off',
    spellCheck: 'off',
  }

  return (
    <div className={cx.root}>
      <label htmlFor={name}
        className={cx.label}>
        {label}
      </label>
      <input
        {...props}
        {...noAuto}
        type={type}
        name={name}
        id={name}
        value={value}
        className={cx.input}
        oninput={oninput} />
      {suffix ? (
        <div className={cx.suffix}>
          {suffix}
        </div>
      ) : null}
    </div>
  )
}

export default Input

