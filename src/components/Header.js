import React from 'react'
import Homeicon from '@material-ui/icons/Home';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import {AssignmentIndOutlined,NotificationsActiveOutlined, PeopleAltOutlined, Search} from '@material-ui/icons'
import { Avatar } from 'react-chat-engine';
import { Button } from '@material-ui/core';
import './wedev.css'

function header() {
  return (
    <div className='header'>
        <div className='header-con'>
            <div className='header_logo'>
                <img src='./responsive.gif' alt=''/>
                <h3>We-dev</h3>
            </div>
            <div className='header-icons'>
                <div className='header_icon'>
                    <Homeicon/>
                </div>
                <div className='header_icon'>
                    <FeaturedPlayListOutlinedIcon/>
                </div>
                <div className='header_icon'>
                    <AssignmentIndOutlined/>
                </div>
                <div className='header_icon'>
                    <PeopleAltOutlined/>
                </div>
                <div className='header_icon'>
                    <NotificationsActiveOutlined/>
                </div>
            </div>
            <div className='search'>
                <Search/>
                <input type="text"  placeholder="search q&a" style={{backgroundColor:"white"}}>
                </input>

            </div>
            <div className='header_rem'>
                <div className='avatar'><Avatar/></div>

            <Button>Create Post</Button>
            
        </div>
    </div>
    </div>
 
  )
}

export default header