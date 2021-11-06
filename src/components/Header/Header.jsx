import React from "react";
import styles from "./style.module.css";
import MockUps from "../../images/image-mockups.png";

function Header() {
  const { link, paragraph, heading, head, mockContainer, text, mockUpImage } =
        styles;
    
  return (
    <section className={head}>
      <div className={text}>
        <h1 className={heading}>
          Next generation <br /> digital banking
        </h1>
        <p className={paragraph}>
          Taker your financial life online. Your Easybank account will be
          one-stop-shop for spending,saving,budgeting,investing and much more.
        </p>
        <a href="#" className={link}>
          Request Invite
        </a>
      </div>
      <div className={mockContainer}>
        <img src={MockUps} alt="mockup" className={mockUpImage} />
      </div>
    </section>
  );
}

export default Header;
