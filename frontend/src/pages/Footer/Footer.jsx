import React from "react";
import footer from "./Footer.module.css";
import { Link } from "react-router-dom";

// fontawsome icons imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareFacebook,
  faSquareInstagram,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const Footer=()=> {

  return (
    <div className={footer.footerr}>
      {/* footer */}

      <div className={footer.footer}>
        <div className={footer.info}>
          <h4>Info</h4>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`/ABOUT`}
          >
            <p>About Us</p>
          </Link>

          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`/PRICING`}
          >
            <p>Pricing</p>
          </Link>

          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`/CONTACT`}
          >
            <p>Contact Us</p>
          </Link>
        </div>

        <div className={footer.info}>
          <h4>Services</h4>
          <p>Music Distribution</p>
          <p>Lyrics Distribution</p>
          <p>Content Promotion</p>
        </div>

        <div className={footer.info}>
          <h4>Legal</h4>
          <p>Terms Of Services</p>
          <p>Distribution Agreement</p>
          <p>Privacy Policy</p>
          <p>Return Or Refund Policy</p>
          <p>Lyrics Guidelines</p>
        </div>

        {/* footer logo section */}

        <div className={footer.footerLogo}>
          <a href="https://www.facebook.com/profile.php?id=61566654747221" style={{ textDecoration: "none" }}>
            <div className={footer.footerIcon}>
              <FontAwesomeIcon icon={faSquareFacebook} />
            </div>
          </a>

          <a
            href="https://www.instagram.com/bitraisesoundindia?igsh=MWoyNG8wemg2c25lNQ=="
            style={{ textDecoration: "none" }}
          >
            <div className={footer.footerIcon}>
              <FontAwesomeIcon icon={faSquareInstagram} />
            </div>
          </a>

          <a href="https://x.com/bs_tune" style={{ textDecoration: "none" }}>
            <div className={footer.footerIcon}>
              <FontAwesomeIcon icon={faSquareXTwitter} />
            </div>
          </a>

          <a
             href="https://www.linkedin.com/company/bs-tune/"
            style={{ textDecoration: "none" }}
          >
            <div className={footer.footerIcon}>
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </a>
        </div>
      </div>

      {/* copyright section */}

      <div className={footer.copyright}>
        <FontAwesomeIcon icon={faCopyright} /> 2024 BS TUNE | Powered by
        Bitraisesound Private Limited
      </div>
    </div>
  );
}

export default Footer;
