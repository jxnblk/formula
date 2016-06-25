
import { hcss } from 'jsxcss'
import {
  handleChange,
  handleScaleChange,
  handleHeightChange,
  handleBaselineChange
} from './store'
import Table from './Table'
import CellInput from './CellInput'
import { red, alpha } from './util/colors'

const Form = ({
  scale,
  lineHeight,
  pad,
  baselineShift,
  paddingTop,
  paddingBottom,
  padX,
  border,
  getHeight
}) => {
  const _getHeight = (s) => {
    return s * lineHeight + (pad * 2 * s) + (border * 2)
  }

  return (
    <div>
      <form>
        {Table({
          fixed: true,
          headers: [
            'Font Size',
            'Total Height',
            'Line Height',
            'Baseline Shift (em)',
            'Padding Top (em)',
            'Padding Bottom (em)',
            'X Padding (em)',
            'Border Width',
          ],
          rows: scale.map((s, i) => {
            const nonInt = getHeight(s) % 1 > 0
            return {
              style: {},
              data: [
                CellInput({
                  type: 'number',
                  name: `scale_${i}`,
                  label: `Scale ${i}`,
                  value: s,
                  readOnly: s === 16,
                  oninput: (e) => {
                    handleScaleChange(e, i)
                  }
                }),
                CellInput({
                  type: 'number',
                  name: `height_${i}`,
                  label: `Height ${i}`,
                  value: getHeight(s),
                  oninput: (e) => handleHeightChange(e, i),
                  style: {
                    color: nonInt ? red : null,
                    backgroundColor: nonInt ? alpha(red, 1/8) : null
                  }
                }),
                CellInput({
                  type: 'number',
                  name: 'lineHeight',
                  label: 'Line Height',
                  value: lineHeight,
                  oninput: (e) => {
                    handleChange(e)
                  },
                  min: 1.25,
                  max: 2,
                  step: 1/32
                }),
                CellInput({
                  type: 'number',
                  name: 'baselineShift',
                  label: `Baseline Shift ${i}`,
                  value: baselineShift,
                  oninput: (e) => handleBaselineChange(e),
                  min: -.5,
                  max: .5,
                  step: 1/64
                }),
                CellInput({
                  type: 'number',
                  name: 'paddingTop',
                  label: `Padding Top ${i}`,
                  value: paddingTop,
                  oninput: (e) => handleChange(e),
                  min: 0,
                  max: 3,
                  step: 1/64
                }),
                CellInput({
                  type: 'number',
                  name: 'paddingBottom',
                  label: `Padding Bottom ${i}`,
                  value: paddingBottom,
                  oninput: (e) => handleChange(e),
                  min: 0,
                  max: 3,
                  step: 1/64
                }),
                CellInput({
                  type: 'number',
                  name: 'padX',
                  label: `X Padding ${i}`,
                  value: padX,
                  oninput: (e) => handleChange(e),
                  min: 0,
                  max: 3,
                  step: 1/64
                }),
                CellInput({
                  type: 'number',
                  name: 'border',
                  label: 'Border',
                  value: border,
                  oninput: (e) => handleChange(e),
                  min: 0,
                  max: 8
                })
              ]
            }
          })
        })}
      </form>
    </div>
  )
}

export default Form

