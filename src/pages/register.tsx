import { ReactElement } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Register from '../containers/Register'

export default function Element(): ReactElement {
  return (
    <div>
      <Navbar />
      {/* <div style={{ backgroundImage: 'url( /login-background.jpg )', width: 700, height: 'calc(100vh - 50px)', display: 'inline-block' }} /> */}
      <Register />
    </div>
  )
}
