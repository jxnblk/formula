
const Button = ({
  text,
  style,
  ...props
}) => {
  const cx = {
    display: 'inline-block',
    fontSize: 14,
    // fontWeight: 'bold',
    padding: 8,
    color: 'inherit',
    backgroundColor: 'transparent',
    border: 0,
    cursor: 'pointer',
    appearance: 'none',
    opacity: .5,
    ...style,
    ':hover': {
      opacity: 1
    }
  }

  return (
    <button
      className={cx}
      {...props}>
      {text}
    </button>
  )
}

export default Button
