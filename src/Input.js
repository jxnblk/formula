
import yo from 'yo-yo'
import h from 'hyperscript'

const _Input = ({
  type = 'text',
  name,
  label,
  value,
  oninput
}) => yo`
<div>
  <label for=${name}>
    ${label}
  </label>
  <input type=${type}
    name=${name}
    id=${name}
    value=${value}
    oninput=${oninput} />
</div>
`

const Input = ({
  type = 'text',
  name,
  label,
  value,
  oninput,
  ...attrs
}) => (
h('div', {}, [
  h('label', { htmlFor: name }, label),
  h('input', {
    type,
    name,
    id: name,
    value,
    oninput,
    ...attrs
  })
])
)

export default Input

