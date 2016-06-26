
import querystring from 'querystring'

const parseNumbers = (obj) => {
  for (let key in obj) {
    const n = +obj[key]
    if (Array.isArray(obj[key])) {
      obj[key] = obj[key].map(v => {
        const n = +v
        return isNaN(n) ? v : n
      })
    }
    if (!isNaN(n)) {
      obj[key] = n
    }
    if (/true|false/.test(obj[key])) {
      obj[key] = obj[key] === 'true'
    }
  }
  return obj
}

export const updateParams = ({
  fontFamily,
  scale,
  lineHeight,
  pad,
  baselineShift,
  border,
  borderRadius,
  proportionalBorderRadius
}) => {
  const state = {
    fontFamily,
    scale,
    lineHeight,
    pad,
    baselineShift,
    border,
    borderRadius,
    proportionalBorderRadius
  }
  const params = querystring.stringify(state)

  window.history.pushState(state, 'Formula', '?' + params)
}

export const getParams = () => {
  const params = window.location.search.replace(/^\?/, '')
  const state = querystring.parse(params)
  return parseNumbers(state)
}

