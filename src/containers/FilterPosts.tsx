import { Button, Form } from 'reactstrap'

import { ReactElement, useState, useEffect, useContext } from 'react'
import Error from '../components/Error'
import Success from '../components/Success'
import Field from '../components/Field'
import { PostsContext } from '../contexts'

export default function FilterPosts(): ReactElement {
  const { addPost, filterPost } = useContext(PostsContext)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  async function submit() {
    setError('')
    if (title || content) {
      filterPost({ title, content })
    }
    else setError('No estas haciendo una busqueda por titulo o contenido')
  }
  useEffect(() => {
    if (success) setTimeout(() => setSuccess(''), 2000)
  }, [success])

  return (
    <div className="container">
      <style jsx>{`
        .container {
          margin-bottom: 30px;
        }

        .title {
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 24px;
          line-height: 130%;
          text-align: center;
        }

        .submit {
          background-color: #00CFFD;
          border-color: #00CFFD;
        }

        .submit:hover {
          background-color: #00CFFD;
          border-color: #00CFFD;
        }
      `}</style>
      <h1 className="title">Filtrar Posts</h1>
      <Form>
          <Field
            id="filter-title"
            label="Title"
            value={title}
            type="text"
            placeholder="Mi increible texto"
            onChange={(v) => setTitle(v.target.value)}
          />
          <Field
            id="filter-content"
            label="Content"
            value={content}
            type="textarea"
            placeholder="Contenido del increible post"
            onChange={(v) => setContent(v.target.value)}
          />

          <Error error={error} />
          <Success message={success} />

          <Button id="filter-posts" className="submit" onClick={submit} block>Buscar</Button>
        </Form>
    </div>
  )
}
