import { useState, useEffect } from 'react'
import useAuth from './useAuth'
import TrackSearchResult from './TrackSearchResult'
import Player from './Player'
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { Container, Form } from 'react-bootstrap' 
import SpotifyWebApi from 'spotify-web-api-node'
import axios from 'axios'
import '../src/styles/MainContainer.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Banner } from './Banner'



const SpotifyApi = new SpotifyWebApi ({
  clientId: 'a5940cfd306c4b3aa74a8bce326569b4',

})

export default function Dashboard({ code }) {
    const accessToken = useAuth(code)
    const [search, setSearch] = useState("") 
    const [searchResults, setSearchResults] = useState([])
    const [playingTrack, setPlayingTrack] = useState()
    const [lyrics, setLyrics] = useState("")

    function chooseTrack(track)  {
      setPlayingTrack(track)
      setSearch("")
      setLyrics("")

    }
//------------------------------useState for Lyrics 

    useEffect(() => {
      if (!playingTrack) return

      axios.get('http://localhost:3001/lyrics', {
        params: {
          track: playingTrack.title,
          artist: playingTrack.artist
        }
      }).then (res => {
        setLyrics(res.data.lyrics)
      })
    }, [playingTrack])

//-----------------------UseState Search results
    useEffect(() => {
      if (!accessToken) return
      SpotifyApi.setAccessToken(accessToken)
      }, [accessToken])
    
      useEffect(() => {

      }, [search, accessToken])

    useEffect(() => {
      if (!search) return setSearchResults([])
      if (!accessToken) return

      let cancel = false
      SpotifyApi.searchTracks(search).then(res => {
        if (cancel) return
        setSearchResults(res.body.tracks.items.map(track => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image
              return smallest
            }, track.album.images[0]
          )
          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url

          }
        }))
      }
        )
      return () => cancel = true
    }, [search, accessToken])

//------------------------Container form for search bar
  
  return (
    <Container className="MainContainer">
       
    <Row md={4}>

      <Col>
        <LeftMenu />
      </Col>

      <Col xs={6}>

          <Banner />
          <Form.Control //--Search Form For Songs--//
            type="search" placeholder="Search Chunes/ARTIST..." 
            value={search} onChange={e => setSearch(e.target.value)}>

          </Form.Control>
        
        <div className="flex-grow-1 my-2" style={{ overflowY: "auto"}}>
          {searchResults.map (track => (
            <TrackSearchResult 
            track={track}
            key={track.uri} 
            chooseTrack={chooseTrack} />
          ))}
          {searchResults.length === 0 && (
            <div className="text-center" style={{whiteSpace: "pre"}}>
            {lyrics}
            </div>
          )}
        </div>
      </Col>

      <Col>
            <RightMenu />
      </Col>

    </Row>
    
    
    <div>
      <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
    </div>

  </Container>
  )
    
    
  
}

