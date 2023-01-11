import React from 'react'
import './wedev.css'
import WidgetContent from './WidgetContent';


function widgets() {
    return (
        <div className="widget">
          <div className="widget__header">
            <h5>Space for you</h5>
          </div>
          <div className="widget__contents">
            <WidgetContent />
          </div>
        </div>
      );
    }

export default widgets