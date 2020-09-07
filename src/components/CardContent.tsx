import { useState } from "react"

type CardContentProps = {
  readonly content: string
}

export default function CardContent({ content }: CardContentProps) {
  const [seeMore, setSeeMore] = useState(false)
  return (
    <p style={{
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: '14px',
      lineHeight: '130%'
    }}
      onClick={() => setSeeMore(!seeMore)}
    >
      {seeMore ? content.concat(' ') : content.substr(0, 191).replace(/( [^ ]+)$/, '').concat('...')}
      {!seeMore ? (
        <span style={{
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '14px',
          lineHeight: '130%',
          color: '#046DE8'
        }}>
          [read more]
        </span>) : <></>}
    </p>
  )
}