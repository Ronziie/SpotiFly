import React from 'react'
import { FaPlus } from 'react-icons/fa';
import '../src/styles/LMenu.css'
import { Playlist } from '../src/Playlist'
import { BsMusicNoteList, BsTrash } from "react-icons/bs"



export default function LeftMenuPlaylist() {
  return (
    <div className="playlist-container">

        <div className="nameContainer">
            <p>Playlist</p>
            <i> <FaPlus /> </i>
        </div>

        <div className="playlist-scroll">{
            Playlist && Playlist.map((list) => (
        
            <div className="playlist" key={list.id}>
                <i className="list">
                    <BsMusicNoteList />
                </i>

                <p>{list.name}</p>

                <i className="trash">
                    <BsTrash />
                </i>
            </div>
            ))}
        </div>


    </div>
  )
}
