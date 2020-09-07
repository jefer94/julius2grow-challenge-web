import { ReactElement } from 'react'

type ErrorProps = {
  readonly error?: string
}

export default function Error({ error }: ErrorProps): ReactElement {
  return (
    <>
      <style jsx>{`
        .error {
          font-family: Roboto;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
          display: flex;
          align-items: center;
          text-align: center;

          color: #FF4C62;
        }
      `}</style>
      {error ? <span className=".error">{error}</span> : <></>}
    </>
  )
}