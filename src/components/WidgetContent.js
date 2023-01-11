import React from "react";
import "./wedev.css";

function WidgetContent() {
  return (
    <div className=" widget__contents">
      <div className="widget__content">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-ti-1737435-100-jxcfmjdvwvpkcketifttdmeeimxcatua.jpeg"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Hello</h5>
          <p>Content to add here</p>
        </div>
      </div>
    </div>
  );
}

export default WidgetContent;