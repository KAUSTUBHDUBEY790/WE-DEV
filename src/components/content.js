import React from 'react'
import Wedevbox from './Wedevbox'
import './wedev.css'
import Post from './Post'

function content() {
  return (
    <div className='feed'>
        <Wedevbox/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>

    </div>
  )
}

export default content