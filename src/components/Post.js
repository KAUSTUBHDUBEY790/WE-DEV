import { Avatar } from '@material-ui/core'
import { ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutline, MoreHorizOutlined, RepeatOneOutlined, ShareOutlined } from '@material-ui/icons'
import React from 'react'
import './wedev.css'

function Post() {
  return (
    <div className='post'>
        <div className='post__info'>
            <Avatar/>
            <h4>User Name</h4>
            <small>00:00:00</small>
        </div>
        <div className='post__body'>
            <p>This is the question</p>
            <button className='post__btnAnswer'>Answer</button>
        </div>
        <div className='post__footer'>
            <div className='post__footerAction'>
                <ArrowUpwardOutlined/>
                <ArrowDownwardOutlined/>
            </div>
            <RepeatOneOutlined/>
            <ChatBubbleOutline/>
            <div className='post__footerLeft'>
                <ShareOutlined/>
                <MoreHorizOutlined/>
            </div>
        </div>
        <p>No answer</p>
        <div className='post__answer'>
            <div className='post-answer-container'>
                <div className='"post-answered'>
                    <Avatar/>
                    <div className='post-info'>
                        <p>
                            username
                        </p>
                        <span>00:00:00</span>
                    </div>
                </div>
                <div className='post-answer'>this is the answer</div>
            </div>
        </div>
    </div>
  )
}

export default Post