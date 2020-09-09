import React, { useEffect } from 'react'
import { fetchTracks } from './redux/actionCreators'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const { tracks, loading, error } = useSelector((state) => state)

  useEffect(() => {
    !tracks && !error && dispatch(fetchTracks())
  }, [dispatch, error, tracks])
  return (
    <div className="App">
      <header className="App-header">
        {error && <p>{tracks.error}</p>}
        {loading && <p>loading ...</p>}
        {tracks && <pre>{JSON.stringify(tracks, null, 2)}</pre>}
      </header>
    </div>
  )
}

export default App
