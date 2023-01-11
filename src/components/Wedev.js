import React from 'react'
import Header from './Header'
import Content from './content'
import Widgets  from './widgets'
import Sidebar from './sidebar'
import './wedev.css'

function Wedev() {
  return (
    <div className='quora'>
    <Header />
    <div className='quora__contents'>
        <div className='quora__content'>
        <Sidebar/>
    <Content/>
    <Widgets/>

    </div>
    </div>
    </div>
  )
}

export default Wedev