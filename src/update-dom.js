
// DOM updater based on yo-yo update(), but
// with support for hyperscript

import morphdom from 'morphdom'

const events = [
  'onclick',
  'ondblclick',
  'onmousedown',
  'onmouseup',
  'onmouseover',
  'onmousemove',
  'onmouseout',
  'ondragstart',
  'ondrag',
  'ondragenter',
  'ondragleave',
  'ondragover',
  'ondrop',
  'ondragend',
  'onkeydown',
  'onkeypress',
  'onkeyup',
  'onunload',
  'onabort',
  'onerror',
  'onresize',
  'onscroll',
  'onselect',
  'onchange',
  'onsubmit',
  'onreset',
  'onfocus',
  'onblur',
  'oninput',
  'oncontextmenu',
  'onfocusin',
  'onfocusout'
]

const formNodes = [
  'INPUT',
  'TEXTAREA',
  'SELECT'
]

const updateDOM = (from, to, options = {}) => {
  options.onBeforeMorphEl = copyState

  return morphdom(from, to, options)
}

const copyState = (from, to) => {
  events.forEach((event, i) => {
    if (to[event]) {
      from[event] = to[event]
    } else if (from[event]) {
      from[event] = null
    }
  })

  if (formNodes.indexOf(from.nodeName) > -1) {
    if (to.value === null) {
      to.value = from.value
    }
  }
}

export default updateDOM

