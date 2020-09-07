import React, { ReactElement, ReactNode } from 'react'
import { PostsContextProvider } from './PostsContext'

type ProviderProps = {
  readonly children: ReactElement
}

/**
 * Contexts provider.
 *
 * @param Props - Props.
 * @returns Contexts provider.
 */
export default function Provider({ children }: ProviderProps): ReactElement {
  return (
    <PostsContextProvider>
      {children}
    </PostsContextProvider>
  )
}

export * from './PostsContext'
