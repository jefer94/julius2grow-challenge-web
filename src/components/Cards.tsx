import { ReactElement, ReactNode } from 'react'

type CardsProps = {
  readonly children?: ReactNode
  readonly id?: string
}


export default function Cards({ children, id }: CardsProps): ReactElement {
  return (
    <>
      <style jsx>{`
        .container {
          width: 400px;
        }
      `}</style>
      <div id={id} className="container">
        {children}
      </div>
    </>
  )
}
