import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Link to={'/register'}>Ragister</Link><br></br>
      <Link to={'/login'}>Login</Link>
    </div>
  )
}

export default Home
