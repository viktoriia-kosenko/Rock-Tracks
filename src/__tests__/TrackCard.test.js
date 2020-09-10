import React from 'react'
import { render } from '@testing-library/react'
import TrackCard from '../TrackCard.js'
import { BrowserRouter as Router } from 'react-router-dom'

describe('TrackCard', () => {
  const track = {
    wrapperType: 'track',
    trackId: 1513350083,
    artistName: 'Rock',
    trackName: 'I Am Rock',
    artistViewUrl: 'https://music.apple.com/us/artist/rock/218563?uo=4',
    collectionViewUrl:
      'https://music.apple.com/us/album/i-am-rock/1513349632?i=1513350083&uo=4',
    trackViewUrl:
      'https://music.apple.com/us/album/i-am-rock/1513349632?i=1513350083&uo=4',
    previewUrl:
      'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/33/bd/29/33bd2943-3b25-80b8-1473-c30747726caf/mzaf_18234752672058510959.plus.aac.p.m4a',
    artworkUrl30:
      'https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/f4/66/73/f4667376-f04b-855d-6947-5787063fea2d/source/30x30bb.jpg',
    artworkUrl60:
      'https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/f4/66/73/f4667376-f04b-855d-6947-5787063fea2d/source/60x60bb.jpg',
    artworkUrl100:
      'https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/f4/66/73/f4667376-f04b-855d-6947-5787063fea2d/source/100x100bb.jpg',
    trackPrice: 1.29,
    releaseDate: '2005-09-06T12:00:00Z',
    collectionExplicitness: 'notExplicit',
    trackExplicitness: 'notExplicit',
    trackTimeMillis: 230827
  }

  const renderComponent = () => {
    return render(
      <Router>
        <TrackCard track={track} />
      </Router>
    )
  }

  it('matches snapshot', () => {
    const wrapper = renderComponent()
    expect(wrapper).toMatchSnapshot()
  })

  it('should display track name', () => {
    const { getByText } = renderComponent()
    const trackName = getByText(/I Am Rock/i)
    expect(trackName).toBeInTheDocument()
  })

  it('should display price', () => {
    const { getByText } = renderComponent()
    const price = getByText(/1.29/i)
    expect(price).toBeInTheDocument()
  })
})
