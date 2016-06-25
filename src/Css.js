
import { hcss } from 'jsxcss'
import Heading from './Heading'

const Css = ({
  lineHeight,
  pad,
  border,
}) => {
const css = `
.input {
  /* Calculated properties */
  line-height: ${lineHeight};
  padding-top: ${pad}em;
  padding-bottom: ${pad}em;
  border-width: ${border};

  box-sizing: border-box;
  margin: 0;
  vertical-align: baseline;
  font-size: inherit;
  font-family: inherit;
}
.input::moz-focus-inner {
  border: 0;
  padding: 0;
  margin-top: -2px;
  margin-bottom: -2px;
}

.button {
  /* Calculated properties */
  line-height: ${lineHeight};
  padding-top: ${pad}em;
  padding-bottom: ${pad}em;
  border-width: ${border};

  box-sizing: border-box;
  font-size: inherit;
  font-family: inherit;
  display: inline-block;
  margin: 0;
  vertical-align: baseline;
  appearance: none;
  text-decoration: none;
  cursor: pointer;
}
`

  const sx = {
    pre: {
      fontFamily: 'Menlo, monospace',
      fontSize: 12,
      color: '#444',
    }
  }
  return (
    <section>
      {Heading({ text: 'CSS' })}
      <pre style={sx.pre}>{css}</pre>
    </section>
  )
}

export default Css

