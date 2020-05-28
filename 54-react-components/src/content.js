import React from "react";
import "./content.css";

const Content = () => {
  return (
    <main className="contentWrapper">
      <div className="inner">
        <div className="contents">
          <div className="content-item">
            <div className="space-img">
              <img src="#" />
            </div>
            <p>Space</p>
          </div>
          <div className="content-item">
            <div className="sky-img">
              <img src="#" />
            </div>
            <p>Sky</p>
          </div>
          <div className="content-item">
            <div className="sea-img">
              <img src="#" />
            </div>
            <p>Sea</p>
          </div>
          <div className="content-item">
            <div className="earth-img">
              <img src="#" />
            </div>
            <p>Earth</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Content;
