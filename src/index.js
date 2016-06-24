
const choo = require('choo')

const app = choo()

app.model({
  state: {
    title: 'uicalc',
    fontFamily: '-apple-system, sans-serif',
    lineHeight: 1.375,
    baselineShift: 0,
    typeScale: [
      48,
      32,
      24,
      20,
      16,
      14,
      12
    ],
    height: 40
  },
  reducers: {
    update: (action, state) => {
      const { name, value } = action.target
      return { [name]: value }
    },
    changeHeight: (action, state) => ({ height: action.value })
  }
})

const Input = ({
  type = 'text',
  label,
  name,
  value,
  oninput
}) => choo.view`
<div>
  <label for=${name}>${label}</label>
  <input
    type=${type}
    name=${name}
    value=${value}
    oninput=${oninput} />
</div>
`

const Heading = ({ text }) => choo.view`
<h1>${text}</h1>
`

const App = (params, state, send) => choo.view`
<div>
  ${Heading({ text: state.title })}
  ${Heading({ text: state.height })}
${Input({
  type: 'number',
  label: 'Height',
  name: 'height',
  value: state.height,
  oninput: (e) => send('update', { target: e.target })
})}
</div>
`

app.router((route) => [
  route('/', App)
])

const tree = app.start()
const div = document.getElementById('app')

div.appendChild(tree)

