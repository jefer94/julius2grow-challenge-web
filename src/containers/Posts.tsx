import { ReactElement, useEffect, useState, useContext } from 'react'
import Card from '../components/Card'
import Cards from '../components/Cards'
import AddPost from '../containers/AddPost'
import checkAuthCredentials from '../hooks/checkAuthCredentials'
import { PostsContext } from '../contexts'
import FilterPosts from './FilterPosts'

export default function Home(): ReactElement {
  const { posts, removePost } = useContext(PostsContext)
  useEffect(checkAuthCredentials, [])

  // function removePostModal(status: boolean): void {
  //   status
  //   //
  // }

  return (
    <div className="container">
      <style jsx>{`
        .sidebar {
          margin-top: 20px;
          width: 400px;
        }
        
        .container {
          flex-shrink: unset;
          width: 100vw;
          flex-grow: 1;
          flex-wrap: wrap;
          display: flex;
          justify-content: space-around;
        }
        
        @media(max-width: 799px) {
          .container {
            flex-flow: wrap-reverse;
          }
        }
      `}</style>
      <Cards id="posts">
        {posts.map((post, key) => (
          <Card
            id={post._id}
            key={key.toString()}
            user={post.user.username}
            date={post.createdAt}
            title={post.title}
            content={post.content}
            onRemove={removePost}
            image={`${process.env.NEXT_PUBLIC_API.replace(/\/$/, '')}${post.image}`} />
        ) )}
      </Cards>
      <div className="sidebar">
        <FilterPosts />
        <AddPost />
      </div>
    </div>
  )
}
