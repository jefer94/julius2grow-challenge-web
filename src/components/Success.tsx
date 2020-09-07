import { ReactElement } from 'react'

type SuccessProps = {
  readonly message?: string
}

export default function Error({ message }: SuccessProps): ReactElement {
  return (
    <>
      <style jsx>{`
        .success {
          font-family: Roboto;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
          display: flex;
          align-items: center;
          text-align: center;

          color: #13DD33;
        }
      `}</style>
      {message ? <span className=".success">{message}</span> : <></>}
    </>
  )
}