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
            <form action="" method="post">
              <input type="email" placeholder="youremail@gmail.com" />
            </form>
            <div className="blank"></div>
          </div>

          <div>
            <div>2023, All Rights Reserved</div>
            <div>Terms & Conditions Privacy</div>
          </div>
        </div>

        {/* Right Part */}
        <div className="foot-right">
          <div className="foot-menu">
            <div>Menu</div>
            <ul>
                <li>Featured Events</li>
                <li>Inventory</li>
                <li>Docs</li>
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
