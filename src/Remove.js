
const Remove = ({
  onclick
}) => {
  const cx = {
    display: 'inline-block',
    fontSize: 20,
    lineHeight: 1.25,
    // fontWeight: 'bold',
    margin: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 8,
    paddingRight: 8,
    color: 'inherit',
    backgroundColor: 'transparent',
    border: 0,
    cursor: 'pointer',
    appearance: 'none',
    opacity: .25,
    ':hover': {
      opacity: 1
    }
  }

  return (
    <button
      className={cx}
      title='Remove'
      onclick={onclick}>
      &times;
    </button>
  )
}

// ✕
export default Remove

