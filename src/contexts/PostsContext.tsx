import React, { useEffect, useState, createContext, ReactElement, ReactNode, ReactChildren } from 'react'
import axios from 'axios'
import construcHeaders from '../hooks/construcHeaders'

type PostsContextAtrrs = {
  readonly posts: readonly Post[]
  readonly fetch?: () => void
  readonly addPost?: (post: Post) => void
  readonly removePost?: (id: string) => void
  readonly filterPost?: (filter: FilterPost) => void
}

export const PostsContext = createContext<PostsContextAtrrs>({
  posts: []
})

type Post = {
  readonly _id?: string
  readonly title: string
  readonly content: string
  readonly image: string
  readonly user: {
    readonly _id?: string,
    readonly username: string
  }
  readonly createdAt: string
  readonly updatedAt: string
}

type FilterPost = {
  readonly title?: string
  readonly content?: string
}

type PostsContextProviderProps = {
  readonly children?: ReactNode
}

/**
 * Posts context provider.
 *
 * @param Props - Props.
 * @returns Posts context provider.
 */
export function PostsContextProvider({ children }: PostsContextProviderProps): ReactElement {
  const [posts, setPosts] = useState<readonly Post[]>([])
  const [offset, setOffset] = useState(0)
  const [isFilter, setIsFilter] = useState(false)

  useEffect(fetch, [])

  function fetch(): void {
    axios.get(`${process.env.NEXT_PUBLIC_API.replace(/\/$/, '')}/posts/${!isFilter ? offset : 0}`, { headers: construcHeaders() }).then((response) => {
      if (response.data.data) setPosts(response.data.data)
    }).catch((e) => { console.error(e) })
    if (!isFilter) setOffset(offset + 1)
    else setOffset(0)
    setIsFilter(false)
  }

  function addPost(post: Post): void {
    setPosts([post, ...posts])
  }

  function removePost(id: string): void {
    axios.delete(`${process.env.NEXT_PUBLIC_API.replace(/\/$/, '')}/posts/${id}`, { headers: construcHeaders() })
      .then()
      .catch((e) => { console.error(e) })
    setPosts(posts.filter(({ _id }) => _id !== id))
  }

  function filterPost(filter: FilterPost): void {
    axios.post(`${process.env.NEXT_PUBLIC_API.replace(/\/$/, '')}/posts/filter`, { ...filter, offset: isFilter ? offset : 0 }, { headers: construcHeaders() }).then((response) => {
      if (response.data.data) setPosts(response.data.data)
    }).catch((e) => { console.error(e) })
    if (isFilter) setOffset(offset + 1)
    else setOffset(0)
    setIsFilter(true)
  }

  return (
    <PostsContext.Provider value={{ posts, fetch, addPost, removePost, filterPost }}>
      {children}
    </PostsContext.Provider>
  )
}

export const PostsContextConsumer = PostsContext.Consumer
