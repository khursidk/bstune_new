import React, { useState, useEffect } from "react";
import axios from "axios";
//fontAwsome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareFacebook,
  faSquareInstagram,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
//mui
import Alert from '@mui/material/Alert';
import Button from "@mui/material/Button";
//css
import contact from "./Contact.module.css";

// aos import
import AOS from "aos";
import 'aos/dist/aos.css';

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Initialize AOS animations
    AOS.init({duration: 2000,
              offset: 50,
              delay: 0,});
  }, []);


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  useEffect(() => {
    if (successMessage || errorMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
        setErrorMessage('');
      }, 2000);

      return () => clearTimeout(timer); 
    }
  }, [successMessage, errorMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, {
        name,
        email,
        subject,
        message,
      });
      setSuccessMessage(response.data.message);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      setErrorMessage('Error sending message: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className={contact.contact} data-aos="fade">
      <img
        src="/images/guitar.jpg"
        alt="Guitar"
        style={{ width: "100%", height: "700px" }}
      />

      <div className={contact.content} data-aos="fade">
        <div
          className={contact.sec1}
          style={{
            textAlign: "center",
            marginBottom: "100px",
            fontSize: "1.6rem",
          }}
        >
          If You Need Any Support Or Any Assistance, Please Reach Out To Our
          Support Team At{" "}
          <span className={contact.Blue}>contact@bstune.com</span>.
        </div>

        <div className={contact.sec2}>
          <div className={contact.text}>
            <div className={contact.textHeading} style={{ fontSize: "20px" }}>
              Contact <span className={contact.Red}>Info</span>
            </div>
            <div className={contact.location}>
              <p>
                <FontAwesomeIcon icon={faLocationDot} />{" "}
                Bhubaneswar, Odisha, India
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} /> contact@bstune.com
              </p>
            </div>
            <div className={contact.followUs} style={{ textAlign: "center" }}>
              <p style={{ fontSize: "20px" }}>
                Follow <span className={contact.Red}>Us</span>
              </p>
              <p>
                Stay Connected And Keep Up With The Latest Updates By Following
                Us On Social Media:
              </p>
              <p className={contact.Icon}>
                <a
                  href="https://www.facebook.com/profile.php?id=61566654747221"
                  style={{ textDecoration: "none" }}
                >
                  <span className={contact.IconLink}>
                    <FontAwesomeIcon icon={faSquareFacebook} />
                  </span>
                </a>
                <a
                  href="https://www.instagram.com/bitraisesoundindia?igsh=MWoyNG8wemg2c25lNQ=="
                  style={{ textDecoration: "none" }}
                >
                  <span className={contact.IconLink}>
                    <FontAwesomeIcon icon={faSquareInstagram} />
                  </span>
                </a>

                <a href="https://x.com/bs_tune" style={{ textDecoration: "none" }}>
                  <span className={contact.IconLink}>
                    <FontAwesomeIcon icon={faSquareXTwitter} />
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/company/bs-tune/"
                  style={{ textDecoration: "none" }}
                >
                  <span className={contact.IconLink}>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </span>
                </a>
              </p>
            </div>
          </div>
          <div className={contact.pic}>
            <img
              style={{ width: "100%", height: "100%" }}
              src="./images/BS_TUNE_LOGO.png"
              alt="BS Tune Logo"
            />
          </div>
        </div>

        <div className={contact.workInfo}>
          <p>
            Business <span>Hours</span>
          </p>
          <p>Monday - Saturday : 9AM - 6PM</p>
          <p>
            <span className={contact.Red}>Sunday : Closed</span>
          </p>
        </div>

        <h1 className={contact.GetInTouch} style={{ textAlign: "center" }}>
          GET IN <span className={contact.Red}>TOUCH</span>
        </h1>

        <div className={contact.inputBox} data-aos="fade">
          <form onSubmit={handleSubmit}>
            <div className={contact.inputB1}>
              <div>
                <div>
                  <label>NAME</label>
                </div>
                <input
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div>
                <div>
                  <label>EMAIL</label>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className={contact.inputB2}>
              <div>
                <div>
                  <label>MESSAGE</label>
                </div>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              <div className={contact.inputB3}>
                <div>
                  <div>
                    <label>SUBJECT</label>
                  </div>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>
                <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "red",
                  color: "white",
                  "&:hover": { backgroundColor: "#d32f2f" },
                }}
              >
                Send
              </Button>
              </div>
            </div>
          </form>

          {successMessage && (
            <Alert className={contact.successMessage} severity="success">{successMessage}</Alert>
          )}
          {errorMessage && (
            <Alert className={contact.errorMessage} severity="error">{errorMessage}</Alert>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
