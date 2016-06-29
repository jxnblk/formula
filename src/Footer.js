
import { hcxs } from 'jsxcss'
import Heading from './Heading'

const related = [
  { href: 'http://jxnblk.com/writing/posts/mathematical-web-typography/', text: 'Mathematical Web Typography' },
  { href: 'http://jxnblk.com/modular/', text: 'Modular' },
  { href: 'http://jxnblk.com/rebass/', text: 'Rebass' },
  { href: 'http://basscss.com/', text: 'Basscss' },
  { href: 'http://tachyons.io/', text: 'Tachyons' },
  { href: 'http://jxnblk.com/gravitons/', text: 'Gravitons' },
]

const Footer = () => {
  const linkStyle = {
    color: 'inherit',
    lineHeight: 2.5,
    fontWeight: 'bold',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline'
    }
  }
  const sx = {
    root: {
      paddingTop: 48,
      paddingBottom: 48,
    },
    related: {
      marginBottom: 48
    },
    relatedHeading: {
      fontSize: 12,
      margin: 0
    },
    relatedLink: {
      ...linkStyle,
      boxSizing: 'border-box',
      display: 'inline-block',
      paddingRight: 16,
      '@media screen and (min-width:40em)': {
        width: '50%'
      },
      '@media screen and (min-width:52em)': {
        width: '25%'
      }
    },
    link: {
      ...linkStyle,
      fontSize: 14,
      marginRight: 16
    },
    meta: {
      fontSize: 12
    }
  }

  return (
    <footer style={sx.root}>
      <div style={sx.related}>
        {/*
        <h4 style={sx.relatedHeading}>Related</h4>
        */}
        {Heading({ text: 'Related' })}
        {related.map(({ href, text }) => (
          <a href={href} style={sx.relatedLink}>{text}</a>
        ))}
      </div>
      <div>
        <a style={sx.link} href='//github.com/jxnblk/formula' style={sx.link}>GitHub</a>
        <a style={sx.link} href='//jxnblk.com' style={sx.link}>Made by Jxnblk</a>
      </div>
      <p style={sx.meta}>
        For Diana
      </p>
    </footer>
  )
}

export default Footer

