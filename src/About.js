
import content from '../docs/About.md'

const html = (str) => {
  const div = document.createElement('div')
  div.innerHTML = str
  return div
}

const About = () => {
  const cx = {
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
    <div className={cx.root}>
      <div className={cx.content}>
        {html(content)}
      </div>
    </div>
  )
}

export default About

