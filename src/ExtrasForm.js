
import { hcss } from 'jsxcss'
import {
  handleChange
} from './store'
import Table from './Table'
import Input from './Input'
import Select from './Select'
import { red, alpha } from './util/colors'

const fontFamilies = [
  'Avenir Next',
  '-apple-system, sans-serif',
  'Helvetica',
  'Verdana',
  'Lucida Grande',
  'Georgia',
  'Roboto',
  'Roboto Mono',
  'SF Mono',
]

const Form = ({
  fontFamily,
  padX,
  borderRadius
}) => {
  return (
    <div>
      <form>
        {Table({
          fixed: true,
          headers: [
            'Font Family',
            'X Padding (em)',
            'Border Radius',
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
              ]
            }
          ]
        })}
      </form>
    </div>
  )
}

export default Form

