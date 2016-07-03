
const Box = ({
  width = '50%'
}, children) => {
  const cx = {
    boxSizing: 'border-box',
    display: 'inline-block',
    width: '100%',
    '@media screen and (min-width:40em)': {
      width
    }
  }

  return (
    <div className={cx}>
      {children}
    </div>
  )
}

export default Box

