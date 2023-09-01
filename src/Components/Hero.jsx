import React from "react";
import BgFirst from "../Assets/BG first Circle.png";
import BgSecond from "../Assets/BG Second Circle.png";
import FrontTicket from "../Assets/front-ticket.png";
import Union1 from "../Assets/Union-down.png";
import Union2 from "../Assets/Union-up.png";
import Bg from "../Assets/background.png";
import RightTicket from "../Assets/Ticket-right.png";
import LeftTicket from "../Assets/ticket-left.png";

export default function Hero() {
  return (
    <div className="hero">
      <img src={Bg} alt="" className="bg" />
      <img src={BgFirst} alt="" className="bg-first" />
      <img src={BgSecond} alt="" className="bg-second" />
      <div className="text">
        <div className="intro">Introducing</div>
        <div className="event">Eventify</div>
      </div>
      <p className="Seamless">
        Seamless granular events hosting with NFT tickets.
      </p>
      <div className="box"></div>
      <div className="img-container">
        <img src={FrontTicket} alt="" className="front-ticket" />
      </div>
      <img src={Union1} alt="" className="union-down" />
      <img src={Union2} alt="" className="union-up" />
      <img src={RightTicket} alt="" className="right-ticket" />
      <img src={LeftTicket} alt="" className="left-ticket" />
    </div>
  );
}
