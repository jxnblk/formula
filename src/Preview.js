
import { hcss } from 'jsxcss'
import { blue, alpha } from './util/colors'

const Preview = ({
  scale,
  lineHeight,
  border,
}) => {
  const sx = {
    root: {
      paddingTop: 32,
      paddingBottom: 32,
      overflowX: 'scroll',
    },
    row: {
      whiteSpace: 'nowrap',
      marginBottom: 16
    },
    label: {
    },
    input: {
      boxSizing: 'border-box',
      lineHeight,
      fontSize: 'inherit',
      fontFamily: 'inherit',
      backgroundColor: alpha(blue, 1/16),
      boxShadow: 'none',
      appearance: 'none',
      borderWidth: border,
      borderStyle: 'solid',
      borderRadius: 0,
      margin: 0,
      marginRight: 16,
    },
    button: {
      fontSize: 'inherit',
      fontFamily: 'inherit',
      lineHeight,
      display: 'inline-block',
      backgroundColor: alpha(blue, 1/16),
      appearance: 'none',
      borderWidth: border,
      borderStyle: 'solid',
      borderRadius: 0,
      margin: 0,
      marginRight: 16,
    },
  }

  return (
    <div style={sx.root}>
      {scale.map((s, i) => (
        <div style={{
          ...sx.row,
          fontSize: s
        }}>
          <label style={sx.label}>{s} Label</label>
          <input style={sx.input} placeholder='placeholder' />
          <input style={sx.input} value='value' />
          <button style={sx.button}>Button</button>
          <code>{i}: {s}</code>
        </div>
      ))}
    </div>
  )
}

export default Preview

