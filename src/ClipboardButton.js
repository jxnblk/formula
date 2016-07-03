
import Button from './Button'
import Clipboard from 'clipboard'

const ClipboardButton = () => {
  const button = Button({
    text: 'Copy to Clipboard',
    id: 'copy',
    style: {
      fontWeight: 'bold',
      opacity: .75
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
