
import { padding } from './store'
import Heading from './Heading'
import ClipboardButton from './ClipboardButton'

const Css = ({
  lineHeight,
  pad,
  border,
}) => {
const css = `
.input {
  /* Calculated properties */
  line-height: ${lineHeight};
  padding-top: ${padding.top}em;
  padding-bottom: ${padding.bottom}em;
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
  padding-top: ${padding.top}em;
  padding-bottom: ${padding.bottom}em;
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

  const cx = {
    root: {
      marginBottom: 48
    },
    pre: {
      fontFamily: `'SFMono-Regular', Menlo, monospace`,
      fontSize: 12,
      lineHeight: 1.375,
      padding: 0,
      margin: 0,
      color: '#444',
    }
  }

  return (
    <section className={cx.root}>
      {Heading({ text: 'CSS' })}
      <pre className={cx.pre} id='css'>{css}</pre>
      {ClipboardButton()}
    </section>
  )
}

export default Css
