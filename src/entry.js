
import yo from 'yo-yo'
import store from './store'
import App from './App'

const div = document.getElementById('app')
const tree = App(store)

const update = () => {
  var newTree = App(store)
  yo.update(tree, newTree)
}

store.subscribe(update)

document.body.appendChild(tree)


