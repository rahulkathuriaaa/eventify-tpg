import React from "react";
import logo from '../Assets/logo.png';
// import lpatch from '../Assets/left-top-patch.png';

export default function Navbar() {
  return (
    <div>
      <nav id="navbar">
        <img src={logo} alt="logo" className="logo" />
        <div className="items" id="features">
          <ul className="first">
            <li>Featured Events</li>
            <li>Inventory</li>
            <li>Docs</li>
          </ul>
        </div>
        <div id="host">
          <button className="btn-hc">Host an event</button>
        </div>
        <div id="Connect">
          <button className="btn-hc">Connect Wallet</button>
        </div>
      </nav>
    </div>
  );
}
