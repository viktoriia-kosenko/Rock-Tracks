import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import Routes from './routes'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">
          <h2 className="text-center font-weight-bold mt-5 text-secondary">
            Rock Tracks
          </h2>
        </Link>
      </div>

      <Routes />
    </BrowserRouter>
  )
}

export default App
