
import { alpha } from './util/colors'

const Table = ({
  headers = [],
  rows = [],
  fixed
}) => {
  const cx = {
    root: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
      tableLayout: fixed ? 'fixed' : null
    },
    th: {
      fontSize: 10,
      textAlign: 'left',
      verticalAlign: 'bottom',
      paddingTop: 4,
      paddingBottom: 4,
      borderBottom: '1px solid',
      '@media screen and (min-width: 32em)': {
        fontSize: 12
      }
    },
    td: {
      verticalAlign: 'baseline',
      padding: 0,
      // paddingTop: 4,
      // paddingBottom: 4,
      borderBottom: '1px solid',
      borderColor: alpha('#000', 1/8),
      '@media screen and (max-width: 32em)': {
        // display: 'block'
      }
    }
  }

  return (
    <table className={cx.root}>
      <thead>
        <tr>
          {headers.map(th => (
            <th className={{ ...cx.th, ...th.style }}>
              {th.data || th}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(r => (
          <tr className={r.style}>
            {r.data.map(d => (
              <td className={cx.td}>
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

