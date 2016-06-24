
import yo from 'yo-yo'
import h from 'hyperscript'

const Table = ({
  headers = [],
  rows = [],
}) => (
  h('table', [
    h('thead', [
      h('tr',
        headers.map(th => h('th', th))
      )
    ]),
    h('tbody', [
      rows.map(r => (
        h('tr', r.map(d => h('td', d)))
      ))
    ])
  ])
)

export default Table

