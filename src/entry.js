
import yo from 'yo-yo'
import store from './store'
import App from './App'
import { handleFontChange } from './webfonts'

const div = document.getElementById('app')
const tree = App(store)

const update = () => {
  var newTree = App(store)
  yo.update(tree, newTree)
}

store.subscribe(update)
store.subscribe(handleFontChange)

document.body.appendChild(tree)


