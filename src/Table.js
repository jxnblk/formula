
import { hcss } from 'jsxcss'
import yo from 'yo-yo'
import h from 'hyperscript'

const Table = ({
  headers = [],
  rows = [],
  fixed
}) => {
  const sx = {
    root: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
      tableLayout: fixed ? 'fixed' : null
    },
    th: {
      textAlign: 'left',
      verticalAlign: 'bottom',
      paddingTop: 4,
      paddingBottom: 4,
      borderBottom: '1px solid'
    },
    td: {
      verticalAlign: 'baseline',
      padding: 0,
      // paddingTop: 4,
      // paddingBottom: 4,
      borderBottom: '1px solid rgba(0, 0, 0, .125)'
    }
  }

  return (
    <table style={sx.root}>
      <thead>
        <tr>
          {headers.map(th => <th style={sx.th}>{th}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map(r => (
          <tr style={r.style}>
            {r.data.map(d => (
              <td style={sx.td}>
                {d}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table

