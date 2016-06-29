
import { hcxs } from 'jsxcss'

const Box = ({
  width = '50%'
}, children) => {
  const sx = {
    boxSizing: 'border-box',
    display: 'inline-block',
    width: '100%',
    '@media screen and (min-width:40em)': {
      width
    }
  }

  return (
    <div style={sx}>
      {children}
    </div>
  )
}

export default Box

