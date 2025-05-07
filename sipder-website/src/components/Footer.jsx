import React from "react";

const Footer = () => {
  return (
    <footer className="footer flex flex-row items-start justify-between p-10 bg-base-200 text-base-content">
      <aside className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">SIPDER</h1>
        {/* <p className="text-sm">
          Empowering inspection workflows
          <br />© {new Date().getFullYear()} All rights reserved
        </p> */}
        <a href="/" class="avatar w-40 rounded">
          <img src="../imgs/SIPDERLogo_V1_transparent_body.png" />
        </a>
      </aside>

      <nav>
        <h6 className="footer-title">Pages</h6>
        <a className="link link-hover" href="/">
          Home
        </a>
        <a className="link link-hover" href="/team">
          Team
        </a>
      </nav>

      <nav>
        <h6 className="footer-title">Contact</h6>
        <a className="link link-hover" href="mailto:support@example.com">
          sipderrobot@gmail.com
        </a>
        {/* <a className="link link-hover" href="#">
          LinkedIn
        </a>
        <a className="link link-hover" href="#">
          GitHub
        </a> */}
      </nav>
    </footer>
  );
};

export default Footer;
