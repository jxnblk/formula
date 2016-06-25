
import { hcss } from 'jsxcss'
import h from 'hyperscript'
import { red, blue, alpha } from './util/colors'
import Heading from './Heading'
import {
  padding,
  handleToggle
} from './store'

const round = (n, d = 0) => {
  return n ? +n.toFixed(d) : ''
}

const Preview = ({
  fontFamily,
  scale,
  lineHeight,
  border,
  pad,
  padX,
  borderRadius,
  showAllElements,
  getHeight,
  ...props
}) => {
  const paddingTop = padding.top + 'em'
  const paddingBottom = padding.bottom + 'em'

  const paddingLeft = `${padX}em`
  const paddingRight = paddingLeft

  const rowRules = `
  inset 0 1px ${alpha(red, 1/2)},
  inset 0 -1px ${alpha(red, 1/2)}
  `.replace(/\s\s+|\n/, ' ')
  const baseline = `
  linear-gradient(${alpha(red, 1/2)}0px, transparent 1px)
  `

  const sx = {
    root: {
      fontFamily,
      paddingTop: 32,
      paddingBottom: 32,
      overflowX: 'scroll',
    },
    row: {
      whiteSpace: 'nowrap',
      boxShadow: rowRules,
      marginBottom: 16,
      // Account for lineHeight
      // backgroundImage: baseline,
      // backgroundPosition: `0 ${pad + 1 + 2/16}em`,
    },
    code: {
      fontFamily: 'Menlo, monospace',
      fontSize: 12,
      marginLeft: 16,
      color: alpha(red, 1/4)
    },
    label: {
      marginRight: 16
    },
    input: {
      lineHeight,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      boxSizing: 'border-box',
      verticalAlign: 'baseline',
      fontSize: 'inherit',
      fontFamily: 'inherit',
      backgroundColor: 'transparent',
      appearance: 'none',
      borderWidth: border,
      borderStyle: 'solid',
      borderColor: alpha('#000', 1/4),
      boxShadow: `inset 0 0 0 1px ${alpha('#000', 1/4)}`,
      borderRadius,
      margin: 0,
      marginRight: 16,
      ':focus': {
        outline: 'none',
        boxShadow: `inset 0 0 0 1px ${alpha(blue, 3/4)}`,
      },
      '::-moz-focus-inner': {
        border: 0,
        padding: 0,
        marginTop: -2,
        marginBottom: -2,
      }
    },
    button: {
      lineHeight,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      boxSizing: 'border-box',
      fontSize: 'inherit',
      fontFamily: 'inherit',
      display: 'inline-block',
      verticalAlign: 'baseline',
      color: 'white',
      backgroundColor: 'black',
      appearance: 'none',
      textDecoration: 'none',
      cursor: 'pointer',
      borderWidth: border,
      borderStyle: 'solid',
      borderColor: alpha('#fff', 1/4),
      borderRadius,
      margin: 0,
      marginRight: 16,
      '::-moz-focus-inner': {
        border: 0,
        padding: 0,
      }
    },
    extras: {
      display: 'inline-block'
    },
    checkbox: {
      fontSize: 12
    }
  }

  return (
    <div style={sx.root}>
      {Heading({ text: 'Preview' })}
      {scale.map((s, i) => (
        <div>
          <div style={{
            ...sx.row,
            fontSize: s
          }}>
            {showAllElements ? (
              <label style={sx.label}>{s}px Label</label>
            ) : null}
            <input style={sx.input}
              value={`${s}px Input`} />
            <button style={sx.button}>Button</button>
            {showAllElements ? (
              <div style={sx.extras}>
                <a href='#!' style={sx.button}>Link Button</a>
                <input type='button' style={sx.button} value='Input Button' />
                <input style={sx.input} placeholder='placeholder' />
              </div>
            ) : null}
            <code style={sx.code}>
              font-size: {round(s, 1)}px,
              height: {round(getHeight(s), 2)}px,
              padding-top: {round(padding.top, 5)}em,
              padding-bottom: {round(padding.bottom, 5)}em
            </code>
          </div>
        </div>
      ))}
      <div>
        <label style={sx.checkbox}>
          {h('input', {
            name: 'showAllElements',
            type: 'checkbox',
            checked: showAllElements,
            onchange: (e) => handleToggle(e)
          })}
          Show more elements
        </label>
      </div>
    </div>
  )
}

export default Preview

