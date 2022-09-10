import React from 'react'
import { FaSpotify, FaEllipsisH } from 'react-icons/fa'
import '../src/styles/LMenu.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { BiSearchAlt } from "react-icons/bi"
import LeftMenuMiddle from './LeftMenuMiddle'
import { MenuList } from './MenuList'
import LeftMenuPlaylist  from './LeftMenuPlaylist'
import LeftMenuTracklist from './LeftMenuTracklist'
import ReactTooltip from 'react-tooltip'


export default function LeftMenu() {
  return (
    <div className="left-menu">
        <div className="logo-container">
            <Row>
                <Col className="logo">
                    
                        <i>
                            <FaSpotify/>
                        </i>
                    
                </Col>

                <Col className="Spotify-title">
                    <h2 data-tip="Spotify">
                        Spotify 
                    </h2>
                </Col>

                <Col className="ellipsis">
                    <i>
                        <FaEllipsisH />
                    </i>
                </Col>
                
            </Row>           
        </div>


        <Row>
            <col></col>
        </Row>
        <div className="searchBox">
            <input type="text" placeholder="search spotify..." />
            <i className='searchIcon'>
                <BiSearchAlt/>
            </i>
        </div>

        <LeftMenuMiddle title={LeftMenuMiddle} MenuObject={MenuList} />

        <LeftMenuPlaylist />

        <LeftMenuTracklist />
        <ReactTooltip />

    </div>

    
  )
}
