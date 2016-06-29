
import { hcxs } from 'jsxcss'

const Heading = ({
  text
}) => {
  const sx = {
    fontSize: 14,
    lineHeight: 1.25,
    marginTop: 32,
    marginBottom: 16,
    paddingBottom: 8,
    borderBottom: '1px solid'
  }

  return (
    <h2 style={sx}>{text}</h2>
  )
}
export default Heading

