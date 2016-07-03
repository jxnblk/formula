
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
  const cx = {
    root: {
      paddingTop: 48,
      paddingBottom: 48,
    },
    related: {
      marginBottom: 48
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
    <footer className={cx.root}>
      <div className={cx.related}>
        {Heading({ text: 'Related' })}
        {related.map(({ href, text }) => (
          <a href={href} className={cx.relatedLink}>{text}</a>
        ))}
      </div>
      <div>
        <a href='//github.com/jxnblk/formula' className={cx.link}>GitHub</a>
        <a href='//jxnblk.com' className={cx.link}>Made by Jxnblk</a>
      </div>
      <p className={cx.meta}>
        For Diana
      </p>
    </footer>
  )
}

export default Footer

