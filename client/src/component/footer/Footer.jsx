import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h1>Be the first to know</h1>
      <p>
        Get product updates, launch announouncements and more by joining my
        newletter
      </p>
      <div>
        <form action="">
          <input type="text" />
          <button>signup</button>
        </form>
        <p>
          You're signing up to receive emails from BEPEC Career Transition
          Programs | www.bepec.in | Bangalore | Limitless Learning
        </p>
      </div>
    </div>
  );
};

export default Footer;
