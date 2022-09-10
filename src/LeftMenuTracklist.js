import React from 'react'
import "../src/styles/LMenu.css"
import { BsFillVolumeUpFill, BsMusicNoteList } from 'react-icons/bs'
import { FaDesktop } from 'react-icons/fa'
import Track from '../src/img/track.png'

export default function LeftTracklist() {
  return (
    <div className="left-tracklist">
      <div className="top">
        <img src={Track} alt=""></img>
        <p className='trackname'> Sample Name 
          <span className='track-span'>Artist</span>
        </p>
      </div>
      <div className='bottom'>
        <i>
          <BsFillVolumeUpFill /> 
        </i>
        <input type="range" />
        <i>
          <BsMusicNoteList />
        </i>
        <i>
          <FaDesktop />
        </i>
      </div>
      
    </div>
  )
}
