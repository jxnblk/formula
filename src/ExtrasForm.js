
import { hcxs } from 'jsxcss'
import {
  handleChange,
  handleToggle
} from './store'
import Table from './Table'
import Input from './Input'
import Select from './Select'
import { red, alpha } from './util/colors'
import { webfonts } from './webfonts'

const fontFamilies = [
  '-apple-system',
  'Helvetica',
  'Avenir Next',
  'Verdana',
  'Lucida Grande',
  'Georgia',
  'SF Mono',
  ...webfonts
]

const Form = ({
  fontFamily,
  padX,
  borderRadius,
  proportionalBorderRadius
}) => {
  return (
    <div>
      <form>
        {Table({
          fixed: true,
          headers: [
            {
              data: 'Font Family',
              style: {
                width: '37.5%'
              }
            },
            { data: 'X Padding (em)' },
            { data: 'Border Radius' },
            { data: 'Proportional' },
          ],
          rows: [
            {
              data: [
                Select({
                  name: 'fontFamily',
                  label: 'Font Family',
                  hideLabel: true,
                  value: fontFamily,
                  oninput: (e) => {
                    handleChange(e)
                  },
                  options: fontFamilies
                }),
                Input({
                  hideLabel: true,
                  type: 'number',
                  name: 'padX',
                  label: 'X Padding',
                  value: padX,
                  oninput: (e) => handleChange(e),
                  min: 0,
                  max: 3,
                  step: 1/64
                }),
                Input({
                  hideLabel: true,
                  type: 'number',
                  name: 'borderRadius',
                  label: 'Border Radius',
                  value: borderRadius,
                  oninput: (e) => handleChange(e),
                  min: 0
                }),
                <label style={{ fontSize: 14 }}>
                  <input type='checkbox'
                    style={{ marginRight: 8 }}
                    name='proportionalBorderRadius'
                    checked={proportionalBorderRadius}
                    onchange={(e) => handleToggle(e)} />
                  Proportional Radii
                </label>
              ]
            }
          ]
        })}
      </form>
    </div>
  )
}

export default Form

