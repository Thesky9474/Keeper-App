import React from "react";
import "../styles.css";

const y = new Date().getFullYear();

function Footer() {
    return (
        <footer>
        <p>Copyright ©️ {y}</p>
        </footer>
    );
  }

export default Footer;  