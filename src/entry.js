
import cxs from 'cxs'
import store from './store'
import App from './App'
import { handleFontChange } from './webfonts'
import { updateParams } from './location'
import updateDOM from './update-dom'

const div = document.getElementById('app')
const tree = App(store)

const update = () => {
  cxs.clearCache()
  var newTree = App(store)
  updateDOM(tree, newTree)
  cxs.attach()
  const css = cxs.getCss()
  console.log(cxs, css.length)
}

store.subscribe(update)
store.subscribe(updateParams)
store.subscribe(handleFontChange)

div.appendChild(tree)
cxs.attach()

