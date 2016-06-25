
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
            'Y Padding (em)',
            'X Padding (em)',
            'Baseline Shift (em)',
            'Border Width',
          ],
          rows: scale.map((s, i) => {
            const nonInt = getHeight(s) % 1 > 0
            const isBase = s === 16
            const props = {
              hideLabel: true,
              big: isBase
            }
            return {
              style: {
              },
              data: [
                CellInput({
                  ...props,
                  type: 'number',
                  name: `scale_${i}`,
                  label: `Scale ${i}`,
                  value: s,
                  readOnly: isBase,
                  oninput: (e) => {
                    handleScaleChange(e, i)
                  }
                }),
                CellInput({
                  ...props,
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
                  ...props,
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
                  ...props,
                  type: 'number',
                  name: 'pad',
                  label: `Y Padding ${i}`,
                  value: pad,
                  oninput: (e) => handleChange(e),
                  min: 0,
                  max: 3,
                  step: 1/64
                }),
                CellInput({
                  ...props,
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
                  ...props,
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
                  ...props,
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

