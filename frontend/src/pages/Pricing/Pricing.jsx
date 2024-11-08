import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import pricing from "./Pricing.module.css";

const planDetails = [
  {
    title: "Silver",
    features: [
      "Customer Service 24X7",
      "Caller Tune Services",
      "Artist Service",
      "Free Promotion",
      "50+ Platforms",
      "Songs Live Within 6 working Days",
      "Solving The Problem within 72 Hrs",
      "Trend Reports Within Every Three Months",
    ],
    price: "499/- >>",
  },
  {
    title: "Gold",
    features: [
      "Customer Service 24X7",
      "Caller Tune Services",
      "Artist Service And Verification",
      "Free Promotion",
      "50+ Platforms",
      "Songs Live Within 3 working Days",
      "Solving The Problem within 48 Hrs",
      "Trend Reports Within Every Two Months",
      "Spotify, Apple Music Verified Check mark",
      "Lyrics Services",
    ],
    price: "999/- >>",
  },
  {
    title: "Diamond",
    features: [
      "Customer Service 24X7",
      "Caller Tune Facility",
      "Artist Service",
      "Free Promotion",
      "Release Unlimited Music To 50+ Platforms",
      "Songs Live Within 1 working Day",
      "Solving The Problem within 24 Hrs",
      "Trend Reports Within Every One Month",
      "Custom Label Name",
      "Free Poster",
      "Lyrics Distribution",
    ],
    price: "1999/- >>",
  },
];

function PricingCard({ title, features, price }) {
  return (
    <div className={pricing.cards} data-aos="fade-down">
      <div className={pricing.cardText}>
        <u>
          <h1 style={{ textAlign: "center", paddingTop: "10px" }}>{title}</h1>
        </u>
        <div className={pricing.cardFeatures}>
          {features.map((feature, index) => (
            <p key={index}>
              <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ff0000" }} />{" "}
              {feature}{" "}
              <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#00ff33" }} />
            </p>
          ))}
        </div>
        <h1 style={{ textAlign: "center", backgroundColor: "#ff0000" }} className={pricing.price}>
          {price}
        </h1>
      </div>
    </div>
  );
}

function Pricing() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, offset: 50, delay: 0 });
  }, []);

  return (
    <div className={pricing.main}>
      <div className={pricing.pricing}>
        <div className={pricing.container}>
          {planDetails.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              features={plan.features}
              price={plan.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
 