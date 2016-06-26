
import { hcss } from 'jsxcss'

const Remove = ({
  onclick
}) => {
  const sx = {
    display: 'inline-block',
    fontSize: 20,
    lineHeight: 1.25,
    // fontWeight: 'bold',
    margin: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 8,
    paddingRight: 8,
    color: 'inherit',
    backgroundColor: 'transparent',
    border: 0,
    cursor: 'pointer',
    appearance: 'none',
    opacity: .25,
    ':hover': {
      opacity: 1
    }
  }

  return (
    <button
      style={sx}
      title='Remove'
      onclick={onclick}>
      &times;
    </button>
  )
}

export default Remove

