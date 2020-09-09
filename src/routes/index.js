import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Tracks from '../Tracks'
import TrackScreen from '../TrackScreen'

export default () => (
  <Switch>
    <Route path="/" exact component={Tracks} />
    <Route path="/track/:trackId" exact component={TrackScreen} />
  </Switch>
)
