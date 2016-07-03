
const Heading = ({
  text
}) => {
  const cx = {
    fontSize: 14,
    lineHeight: 1.25,
    marginTop: 32,
    marginBottom: 16,
    paddingBottom: 8,
    borderBottom: '1px solid'
  }

  return (
    <h2 className={cx}>{text}</h2>
  )
}
export default Heading

