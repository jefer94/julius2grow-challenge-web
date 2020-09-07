export default function CardDate({ date }) {
  return (
    <span style={{
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 200,
      fontSize: '12px',
      lineHeight: '14px'
    }}>
      {` - ${date}`}
    </span>
  )
}