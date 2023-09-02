import React from "react";

export default function Footer() {
  return (
    <section className="foot-section">
        {/* Footer Section */}
      <div className="foot-content">
        {/* Left Part */}
        <div className="foot-left">
          <div className="foot-container glass">
            <div className="foot-sign">Sign Up to Receive Product Updates and More</div>
            <form action="" method="post" className="foot-form">
              <input type="email" placeholder="youremail@gmail.com" className="foot-form"/>
            </form>
            <div className="blank"></div>
          </div>

          {/* <div>
            <div className="foot-info">2023, All Rights Reserved</div>
            <div className="text-white">Terms & Conditions Privacy</div>
          </div> */}
        </div>

        {/* Right Part */}
        <div className="foot-right">
          <div className="foot-menu">
            <div><a href="">Menu</a></div>
            <ul>
                <li><a href="">Featured Events</a></li>
                <li><a href="">Inventory</a></li>
                <li><a href="">Docs</a></li>
            </ul>
          </div>

          <div className="foot-menu">
            <div>Help</div>
            <ul>
                <li>Privacy and Policy</li>
                <li>Term of Use</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
