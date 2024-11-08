import React, { useEffect } from "react";
import about from "./About.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Saira Condensed",
      fontWeight: "bold",
    },
  },
});

const directors = [
  {
    name: "BISWAJIT SAHOO",
    title: "Founder, Chief Executive Officer (CEO)",
    image: "./images/biswajit.jpg",
  },
  {
    name: "CHINMAYA KU. MAHARANA",
    title: "Co-Founder, Chief Managing Director (CMD)",
    image: "./images/chinmay.jpg",
  },
  {
    name: "SUVENDU KISHORE SAHOO",
    title: "Director of Operations",
    image: "./images/suvendu.jpg",
  },
  {
    name: "JITENDRA KUMAR OJHA",
    title: "Director of Label & Artist Solutions",
    image: "./images/jitu.jpg",
  },
  {
    name: "GOURANGA CHARAN MISHRA",
    title: "Director of Finance",
    image: "./images/gudu.jpg",
  },
  {
    name: "SHAILESH PATTANAIK",
    title: "Director of Music Rights & Licensing",
    image: "./images/sailesh.jpg",
  },
  {
    name: "SUBHAM JENA",
    title: "Director of Royalties & Revenue Analyst",
    image: "./images/suvam.jpg",
  },
  {
    name: "RAM PRASAD ACHARYA",
    title: "Director of Marketing & Brand Strategy",
    image: "./images/ram.jpg",
  },
];

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 2000, offset: 50, delay: 0 });
  }, []);

  return (
    <div className={about.About} data-aos="fade">
      <img src="/images/mainPic.jpg" style={{ width: "100%", height: "700px" }} alt="Main" />

      <div className={about.divider} data-aos="fade">ABOUT US</div>
      <div className={about.dec} data-aos="fade">
        Welcome to BS TUNE - where your music meets the world wide. Founded in 2023, we are a
        dedicated partner in your journey to share your music with audiences everywhere.
      </div>

      <div className={about.divider} data-aos="fade">OUR MISSION</div>
      <div className={about.dec1} data-aos="fade">
        At BS TUNE, our mission is to empower artists by providing an intuitive, transparent, and efficient platform to distribute their music across all digital platforms.
      </div>

      <div className={about.divider} data-aos="fade">WHAT WE DO</div>
      <div className={about.dec2} data-aos="fade">
        Our platform allows you to easily upload your tracks and track your sales and royalties—all from one convenient dashboard.
      </div>

      <div className={about.divider} data-aos="fade">OUR CHIEFS</div>
      <div className={about.member} data-aos="fade">
        <ThemeProvider theme={theme} data-aos="fade">
          {directors.slice(0, 2).map((director) => (
            <DirectorCard key={director.name} director={director} />
          ))}
        </ThemeProvider>
      </div>

      <div className={about.divider} data-aos="fade">BOARD OF DIRECTORS</div>
      <div className={about.member} data-aos="fade">
        <ThemeProvider theme={theme} data-aos="fade">
          {directors.slice(2).map((director) => (
            <DirectorCard key={director.name} director={director} />
          ))}
        </ThemeProvider>
      </div>

      <h1 style={{ textAlign: "center" }} data-aos="fade">
        WE ARE COMMITTED TO PROVIDING YOU WITH EXCEPTIONAL SERVICE AND SUPPORT.
      </h1>

      <div className={about.divider} data-aos="fade">GET IN TOUCH</div>
      <div className={about.getIn} data-aos="fade">
        <p>
          Have questions or need assistance? Our support team is here to help. Reach out to us at{" "}
          <span style={{ color: "blue" }} data-aos="fade">contact@bstune.com</span>.
        </p>
      </div>
    </div>
  );
}

function DirectorCard({ director }) {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "#ff0000", color: "white", borderRadius: 5 }}>
      <CardActionArea>
        <CardMedia component="img" height="300" image={director.image} alt={director.name} sx={{ objectFit: "fill" }} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center" }}>
            {director.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "white", textAlign: "center" }}>
            {director.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default About;
