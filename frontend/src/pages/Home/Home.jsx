import React,{useEffect,useState} from "react";
// css module import
import styled from "./Home.module.css";

// aos import
import AOS from "aos";
import 'aos/dist/aos.css';

// swiper slider imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

//mui

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from "@mui/material";

// Home component

const Home = () => {

  // AOS global settings

  const [aosType, setAosType] = useState(window.innerWidth <= 772 ? 'fade' : 'fade-left');

  useEffect(() => {
    // Initialize AOS animations
    AOS.init({duration: 1500,
              offset: 50,
              delay: 0,});

    const handleResize = () => {
      const screenWidth = window.innerWidth;
      // Change AOS type based on screen width
      if (screenWidth <= 772) {
        setAosType('fade');
      } else {
        setAosType('fade-left');
      }
    };

    // Attach resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  // css scoping for top image
  const welcome = {
    main: {
      backgroundImage: `url("/images/site image.jpg")`,
      width: `100%`,
      height: `100%`,
      backgroundSize: `cover`,
      backgroundRepeat: `no-repeat`,
      display: `flex`,
      flexDirection: `column`,
      justifyContent: `space-between`,
      overFlow: `hidden`,
    },
  };
  return (
    <>
      <div className={styled.Home}>
        <div className={styled.welcome} style={welcome.main} data-aos="fade">

          {/* main title */}
          <div className={styled.welcomeText} data-aos="fade">
            <h1 data-aos="fade">
              <span className={styled.White}>WELCOME TO </span>
              <span className={styled.Red}>BSTUNE</span>
            </h1>
          </div>
          {/* main title end */}
        {/* wave effect */}
            <svg
              width="100%"
              height="100%"
              id="svg"
              viewBox="0 0 1440 490"
              xmlns="http://www.w3.org/2000/svg"
              className="transition duration-300 ease-in-out delay-150"
            >
              <style>
                {`
          .path-0 {
            animation: pathAnim-0 4s linear infinite;
          }
          @keyframes pathAnim-0 {
            0% {
              d: path("M 0,500 L 0,187 C 107.54066985645932,134.57894736842104 215.08133971291863,82.15789473684211 293,109 C 370.91866028708137,135.8421052631579 419.21531100478467,241.9473684210526 526,246 C 632.7846889952153,250.0526315789474 798.0574162679426,152.05263157894737 896,131 C 993.9425837320574,109.94736842105263 1024.5550239234449,165.8421052631579 1104,188 C 1183.4449760765551,210.1578947368421 1311.7224880382776,198.57894736842104 1440,187 L 1440,500 L 0,500 Z");
            }
            25% {
              d: path("M 0,500 L 0,187 C 103.48325358851676,213.86124401913875 206.96650717703352,240.7224880382775 318,238 C 429.0334928229665,235.2775119617225 547.6172248803829,202.97129186602874 628,192 C 708.3827751196171,181.02870813397126 750.5645933014354,191.39234449760764 842,176 C 933.4354066985646,160.60765550239236 1074.1244019138755,119.45933014354067 1182,117 C 1289.8755980861245,114.54066985645933 1364.9377990430621,150.77033492822966 1440,187 L 1440,500 L 0,500 Z");
            }
            50% {
              d: path("M 0,500 L 0,187 C 100.59330143540669,182.14832535885168 201.18660287081337,177.29665071770336 305,167 C 408.8133971291866,156.70334928229664 515.8468899521532,140.96172248803828 599,138 C 682.1531100478468,135.03827751196172 741.425837320574,144.85645933014354 832,159 C 922.574162679426,173.14354066985646 1044.4497607655503,191.61244019138758 1151,197 C 1257.5502392344497,202.38755980861242 1348.7751196172248,194.6937799043062 1440,187 L 1440,500 L 0,500 Z");
            }
            75% {
              d: path("M 0,500 L 0,187 C 124.07655502392345,233.42105263157893 248.1531100478469,279.84210526315786 335,272 C 421.8468899521531,264.15789473684214 471.46411483253587,202.05263157894737 551,197 C 630.5358851674641,191.94736842105263 739.9904306220094,243.9473684210526 849,256 C 958.0095693779906,268.0526315789474 1066.5741626794259,240.1578947368421 1165,222 C 1263.4258373205741,203.8421052631579 1351.712918660287,195.42105263157896 1440,187 L 1440,500 L 0,500 Z");
            }
            100% {
              d: path("M 0,500 L 0,187 C 107.54066985645932,134.57894736842104 215.08133971291863,82.15789473684211 293,109 C 370.91866028708137,135.8421052631579 419.21531100478467,241.9473684210526 526,246 C 632.7846889952153,250.0526315789474 798.0574162679426,152.05263157894737 896,131 C 993.9425837320574,109.94736842105263 1024.5550239234449,165.8421052631579 1104,188 C 1183.4449760765551,210.1578947368421 1311.7224880382776,198.57894736842104 1440,187 L 1440,500 L 0,500 Z");
            }
          }
        `}
              </style>
              <path
                d="M 0,500 L 0,187 C 107.54066985645932,134.57894736842104 215.08133971291863,82.15789473684211 293,109 C 370.91866028708137,135.8421052631579 419.21531100478467,241.9473684210526 526,246 C 632.7846889952153,250.0526315789474 798.0574162679426,152.05263157894737 896,131 C 993.9425837320574,109.94736842105263 1024.5550239234449,165.8421052631579 1104,188 C 1183.4449760765551,210.1578947368421 1311.7224880382776,198.57894736842104 1440,187 L 1440,500 L 0,500 Z"
                stroke="none"
                strokeWidth="0"
                fill="#ffffff"
                fillOpacity="1"
                className="transition-all duration-300 ease-in-out delay-150 path-0"
              />
            </svg>
            {/* wave effect end */}
        </div>

        <div className={styled.latestText} data-aos={window.innerWidth > 772 ? 'fade-down' : 'fade'}>
          <div>See What's New</div>
          <h1>
            <span className="Black">LATEST </span>
            <span className={styled.Red}>ALBUMS</span>
          </h1>
        </div>

    <div className={styled.latest}>
          <Swiper
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={4}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={50}
            modules={[Navigation, Autoplay]}
            className="swiper_container"
          >
            <SwiperSlide className={styled.latestPic}>
              <img src="./images/album1.jpg" alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide className={styled.latestPic}>
              <img src="./images/album2.png" alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide className={styled.latestPic}>
              <img src="./images/album3.jpg" alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide className={styled.latestPic}>
              <img src="./images/album4.jpeg" alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide className={styled.latestPic}>
              <img src="./images/album5.jpg" alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide className={styled.latestPic}>
              <img src="./images/album6.jpg" alt="slide_image" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className={styled.chooseText} data-aos="fade">
          <h1>
            <span className={styled.Black}>WHY </span>
            <span className={styled.Red}>CHOOSE US ?</span>
          </h1>
        </div>

        <div className={styled.choose} data-aos="fade">
          <p className={styled.choosePara} data-aos={window.innerWidth > 772 ? 'fade-left' : 'fade'}>
            <span className={styled.Red}>Global Reach :</span> Distribute your
            music to major streaming platforms and online stores.
          </p>
          <p className={styled.choosePara} data-aos={window.innerWidth > 772 ? 'fade-right' : 'fade'}>
            <span className={styled.Red}>User-Friendly Interface:</span> Our
            platform makes it easy to upload, manage, and track your releases.
          </p>
          <p className={styled.choosePara} data-aos={window.innerWidth > 772 ? 'fade-left' : 'fade'}>
            <span className={styled.Red}>Rights & Royalties:</span> Keep 100% of
            your rights & royalties.
          </p>
          <p className={styled.choosePara} data-aos={window.innerWidth > 772 ? 'fade-right' : 'fade'}>
            <span className={styled.Red}>Support:</span> From distribution to
            marketing tips, our dedicated support team is here to assist you
            every step of the way.
          </p>
        </div>

        <div className={styled.getStarted} data-aos={window.innerWidth > 772 ? 'zoom-in' : 'fade'}>
          <h2>Get Started Today</h2>
        </div>

        <div className={styled.network} data-aos="fade">
          <h1>
            <span className={styled.Black}>OUR </span>
            <span className={styled.Red}>NETWORK</span>
          </h1>
        </div>

        <div className={styled.logos}>
          <div data-aos={window.innerWidth > 772 ? 'fade-right' : 'fade'}>
            <img src="./images/spotyfy.png" />
          </div>
          <div data-aos={window.innerWidth > 772 ? 'fade-down' : 'fade'}>
            <img src="./images/apple music.png" />
          </div>
          <div  data-aos={window.innerWidth > 772 ? 'fade-left' : 'fade'}>
            <img src="./images/jio saavan.png" />
          </div>
          <div data-aos={window.innerWidth > 772 ? 'fade-right' : 'fade'}>
            <img src="./images/amazonmusic.png" />
          </div>
          <div data-aos={window.innerWidth > 772 ? 'fade-up' : 'fade'}>
            <img src="./images/wynk-music.webp" />
          </div>
          <div data-aos={window.innerWidth > 772 ? 'fade-left' : 'fade'}>
            <img src="./images/gaana.jpg" />
          </div>
        </div>

        <div className={styled.more}>More 100+</div>

        <div className={styled.ourServicesText} data-aos="fade">
          <h1>
            <span className={styled.Black}>OUR </span>
            <span className={styled.Red}>SERVICES</span>
          </h1>
        </div>

        <div className={styled.ourServices}>
          <div className={styled.serviceContent}>
            <div className={styled.serviceImg} data-aos={window.innerWidth > 772 ? 'fade-right' : 'fade'}>
              <img src="./images/service1.jpg" />
            </div>
            <div className={styled.serviceSubText} data-aos={window.innerWidth > 772 ? 'fade-left' : 'fade'}>
              <h4>
                DIGITAL MUSIC <span className={styled.Red}>SERVICES</span>
              </h4>
              <p>
                Release your tracks worldwide on all major streaming platforms
                global including Spotify, iTunes, Amazon Prime Music, JioSaavn,
                Wynk Music, Gaana, Hungama Music, and many more.
              </p>
            </div>
          </div>

          <div className={styled.serviceContent}>
            <div className={styled.serviceSubText} data-aos={window.innerWidth > 772 ? 'fade-right' : 'fade'}>
              <h4>
                CALLER TUNES <span className={styled.Red}>SERVICES</span>
              </h4>
              <p>
                BS TUNE provides you all Indian caller tune providers including
                Airtel, Jio, Vi, and BSNL and showcase your music to the world.
              </p>
            </div>
            <div className={styled.serviceImg} data-aos={window.innerWidth > 772 ? 'fade-left' : 'fade'}>
              <img src="./images/service2.png" />
            </div>
          </div>
          <div className={styled.serviceContent}>
            <div className={styled.serviceImg} data-aos={window.innerWidth > 772 ? 'fade-right' : 'fade'}>
              <img src="./images/service3.png" />
            </div>
            <div className={styled.serviceSubText} data-aos={window.innerWidth > 772 ? 'fade-left' : 'fade'}>
              <h4>
                LYRICS <span className={styled.Red}>SERVICES</span>
              </h4>
              <p>
                Release your music with BS TUNE also have Lyrics distribution on
                all industry's best lyrics platforms including Google, Spotify,
                Apple Music, Amazon Music, Instagram, JioSaavn and more.
              </p>
            </div>
          </div>
        </div>

        <div className={styled.helpCenterText} data-aos="fade">
          <h1>
            <span className={styled.Black}>HELP </span>
            <span className={styled.Red}>CENTER...</span>
          </h1>
        </div>

<Container sx={{marginBottom:4}}>
<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Have more questions or helps?
        </AccordionSummary>
        <AccordionDetails>
        Visit the BS TUNE contact Section for more information.
        </AccordionDetails>
      </Accordion>
      </Container>
      </div>
    </>
  );
};

export default Home;
