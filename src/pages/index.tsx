import { ReactElement, useEffect, useContext } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Posts from '../containers/Posts'
import checkAuthCredentials from '../hooks/checkAuthCredentials'
import { PostsContextProvider } from '../contexts/PostsContext'

console.log('aaaaaa', process.env.NEXT_PUBLIC_ANALYTICS_ID)
export default function Home(): ReactElement {
  useEffect(checkAuthCredentials)
  console.log('aaaaaa', process.env.NEXT_PUBLIC_ANALYTICS_ID, process.env.SECRET)

  return (
    <div>
      <Navbar />
      <PostsContextProvider>
        <Posts />
      </PostsContextProvider>
    </div>
  )
}
