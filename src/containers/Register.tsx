import { Button, Form } from 'reactstrap'

import { ReactElement, useState } from 'react'
import axios from 'axios'
import Error from '../components/Error'
import setToken from '../hooks/setToken'
import Field from '../components/Field'

export default function Register(): ReactElement {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [error, setError] = useState('')

  async function submit() {
    setError('')
    if (username && email && password && password === newPassword) {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API.replace(/\/$/, '')}/users`, { username, email, password })
      const { token } = response.data

      if (!token) {
        const [error] = response.data.errors
        if (error === 'dup key: username') setError('Nombre de usuario duplicado')
        else if (error === 'dup key: email') setError('Email duplicado')
        else setError('Error desconocido')
        return
      }

      setToken(token)
    }
    else if (!username) setError('Nombre de usuario vacio')
    else if (!email) setError('Correo vacio')
    else if (!password) setError('Contraseña vacia')
    else setError('Contraseñas no coinciden')
  }

  return (
    <div className="flex">
      <style jsx>{`
        .container {
          margin-top: 120px;
          width: 400px;
          position: absolute;
          display: inline-block;
        }

        .flex {
          display: flex;
          justify-content: center;
          width: 100vw;
          height: calc(100vh - 50px);
        }

        .title {
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 24px;
          line-height: 130%;
          text-align: center;
        }

        .description {
          font-family: Roboto;
          font-style: normal;
          font-weight: 300;
          font-size: 15px;
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

        .alternative {
          font-family: Roboto;
          font-style: normal;
          font-weight: 300;
          font-size: 16px;
          line-height: 19px;
          display: flex;
          align-items: center;
          text-align: center;

          color: #000000;
        }

        .alternative {
          font-family: Roboto;
          font-style: normal;
          font-weight: 300;
          font-size: 16px;
          line-height: 19px;
          display: block;
          align-items: center;
          text-align: center;
          margin-top: 30px;

          color: #000000;
        }

        .link {
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 19px;
          display: block;
          align-items: center;
          text-align: center;
          text-decoration-line: underline;
          text-align: center;
          margin-bottom: 30px;

          color: #568AF2;
        }
      `}</style>
      <div className="container">
        <h1 className="title">Login in Violet Blog</h1>
        <p className="description">Get access to our awesome blog comunity</p>
        <Form>
          <Field
            id="username"
            label="Username"
            value={username}
            autoComplete="username"
            type="text"
            placeholder="Konan"
            onChange={(v) => setUsername(v.target.value)}
          />
          <Field
            id="email"
            label="Email"
            value={email}
            type="email"
            placeholder="Konan@gmail.com"
            onChange={(v) => setEmail(v.target.value)}
          />
          <Field
            id="current-password"
            label="Password"
            value={password}
            autoComplete="current-password"
            type="password"
            placeholder="P4ssw0rd!"
            onChange={(v) => setPassword(v.target.value)}
          />
          <Field
            id="new-password"
            label="Repeat password"
            value={newPassword}
            autoComplete="new-password"
            type="password"
            placeholder="P4ssw0rd!"
            onChange={(v) => setNewPassword(v.target.value)}
          />

          <Error error={error} />

          <span className="alternative">Ya tienes una cuenta?</span>
          <a className="link" href="/register">acceder</a>

          <Button className="submit" onClick={submit} block>Ingresar</Button>
        </Form>
      </div>
    </div> 
  )
}
