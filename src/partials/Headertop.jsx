import React from "react";

function Headertop(props) {
  return (
    <div>
      <header>
        <p>calc</p>
        <div className="theme">
          <p>Theme</p>
          <div className="switch-toggle">
            <div className="number-toggle">
              <p>1</p>
              <p>2</p>
              <p>3</p>
            </div>
            <div className="container">
              <div className="button" onClick={props.selectTheme}></div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Headertop;
