import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AllTracks from '../AllTracks'
import TrackScreen from '../TrackScreen'

export default () => (
  <Switch>
    <Route path="/" exact component={AllTracks} />
    <Route path="/track/:trackId" exact component={TrackScreen} />
  </Switch>
)
