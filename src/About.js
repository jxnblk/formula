
import { hcss } from 'jsxcss'
import content from '../docs/About.md'

const html = (str) => {
  const div = document.createElement('div')
  div.innerHTML = str
  return div
}

const About = () => {
  const sx = {
    root: {
      paddingTop: 48,
      paddingBottom: 48,
    },
    content: {
      lineHeight: 1.375,
      maxWidth: 768
    }
  }

  return (
    <div style={sx.root}>
      <div style={sx.content}>
        {html(content)}
      </div>
    </div>
  )
}

export default About

