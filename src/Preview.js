
import { hcss } from 'jsxcss'
import { red, blue, alpha } from './util/colors'

const Preview = ({
  scale,
  lineHeight,
  border,
  pad,
  getHeight
}) => {
  const paddingTop = `${pad}em`
  const paddingBottom = paddingTop

  const rowRules = `
  inset 0 1px ${alpha(red, 1/2)},
  inset 0 -1px ${alpha(red, 1/2)}
  `.replace(/\s\s+|\n/, ' ')
  const baseline = `
  linear-gradient(${alpha(red, 1/2)}0px, transparent 1px)
  `

  const sx = {
    root: {
      paddingTop: 32,
      paddingBottom: 32,
      overflowX: 'scroll',
    },
    row: {
      whiteSpace: 'nowrap',
      boxShadow: rowRules,
      // Account for lineHeight
      // backgroundImage: baseline,
      // backgroundPosition: `0 ${pad + 1 + 2/16}em`,
    },
    pre: {
      fontFamily: 'Menlo, monospace',
      fontSize: 12,
      marginTop: 4,
      marginBottom: 16
    },
    code: {
      fontFamily: 'Menlo, monospace',
    },
    label: {
      marginRight: 16
    },
    input: {
      lineHeight,
      paddingTop,
      paddingBottom,
      boxSizing: 'border-box',
      verticalAlign: 'baseline',
      fontSize: 'inherit',
      fontFamily: 'inherit',
      backgroundColor: alpha(blue, 1/2),
      boxShadow: 'none',
      appearance: 'none',
      borderWidth: border,
      borderStyle: 'solid',
      borderColor: alpha(blue, 3/4),
      borderRadius: 0,
      margin: 0,
      marginRight: 16,
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
      // height: `${lineHeight + pad * 2}em`,
      boxSizing: 'border-box',
      fontSize: 'inherit',
      fontFamily: 'inherit',
      display: 'inline-block',
      verticalAlign: 'baseline',
      color: 'inherit',
      backgroundColor: alpha(blue, 1/2),
      appearance: 'none',
      textDecoration: 'none',
      borderWidth: border,
      borderStyle: 'solid',
      borderColor: alpha(blue, 3/4),
      borderRadius: 0,
      margin: 0,
      marginRight: 16,
      '::-moz-focus-inner': {
        border: 0,
        padding: 0,
      }
    },
  }

  return (
    <div style={sx.root}>
      {scale.map((s, i) => (
        <div>
          <div style={{
            ...sx.row,
            fontSize: s
          }}>
            <label style={sx.label}>{s}px Label</label>
            <input style={sx.input}
              value='Input' />
            <button style={sx.button}>Button</button>
            <a href='#!' style={sx.button}>Link Button</a>
            <input type='button' style={sx.button} value='Input Button' />
            <input style={sx.input} placeholder='placeholder' />
          </div>
          <pre style={sx.pre}>
            <code style={sx.code}>{pad}em, {getHeight(s)}px</code>
          </pre>
        </div>
      ))}
    </div>
  )
}

export default Preview

