
import { hcxs } from 'jsxcss'
import { blue, alpha } from './util/colors'

const State = (state) => {
  const sx = {
    padding: 16,
    color: blue,
    backgroundColor: alpha(blue, 1/8)
  }

  return (
    <pre style={sx}>
      Application state:
      {JSON.stringify(state, null, 2)}
    </pre>
  )
}

export default State

