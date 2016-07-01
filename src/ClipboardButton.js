
import { hcss } from 'jsxcss'
import Button from './Button'
import Clipboard from 'clipboard'

const ClipboardButton = ({ css }) => {
  const button = Button({
    text: 'Copy to Clipboard',
    id: 'copy',
    style: {
      border: '1px solid #111',
      borderRadius: 4,
      marginTop: 8
    }
  })

  new Clipboard(button, {
    target: () => {
      return document.getElementById('css')
    }
  })

  return button
}

export default ClipboardButton
