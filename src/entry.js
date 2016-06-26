
import store from './store'
import App from './App'
import { handleFontChange } from './webfonts'
import { updateParams } from './location'
import updateDOM from './update-dom'

const div = document.getElementById('app')
const tree = App(store)

const update = () => {
  var newTree = App(store)
  updateDOM(tree, newTree)
}

store.subscribe(update)
store.subscribe(updateParams)
store.subscribe(handleFontChange)

div.appendChild(tree)

