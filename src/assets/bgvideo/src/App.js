import React, { useEffect, useState, useCallback } from "react";
import "./App.css";
import { motion, easeInOut } from "framer-motion";
import bgvideo from "./assets/bgvideo.mp4";
import { useInView } from "react-intersection-observer";
// import Particles from "react-tsparticles";
// import { loadSlim } from "tsparticles-slim";
// import { loadFull } from "tsparticles";
import ParticlesComponent from './particles';
import { Tabs } from "./Tabs";



function App() {
 

  


  // useEffect(() => {
  //   document.querySelectorAll(".card").forEach((card) => {
  //     const video = card.querySelector(".card-video");

  //     card.addEventListener("mouseenter", () => {
  //       video.play(); // Play the video when the card is hovered
  //     });

  //     card.addEventListener("mouseleave", () => {
  //       video.pause(); // Pause the video when the mouse leaves the card
  //       video.currentTime = 0; // Reset the video to the beginning
  //     });
  //   });

  //   // Clean up event listeners when the component unmounts
  //   return () => {
  //     document.querySelectorAll(".card").forEach((card) => {
  //       const video = card.querySelector(".card-video");
  //       card.removeEventListener("mouseenter", () => {
  //         video.play();
  //       });
  //       card.removeEventListener("mouseleave", () => {
  //         video.pause();
  //         video.currentTime = 0;
  //       });
  //     });
  //   };
  // }, []); // Empty dependency array ensures this effect runs only once after the component mounts

  const [ref5, inView5] = useInView();

  const variants2 = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 },
  };
  const variants1 = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };
  const variants3 = {
    hidden: { opacity: 0, y: -200 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="position-relative">
        <video
          className="image-car"
          src={bgvideo}
          autoPlay
          muted
          loop
          alt="Banner Video"
        >
          Your browser does not support the video tag.
        </video>
        <div className="overlayMain"></div>
        <div
          className="position-absolute w-100 top-50 start-50 translate-middle text-center"
          style={{ zIndex: 2 }}
        >
          <div className="col-md-12 offset-md-1 col-lg-12 offset-lg-0 col-xl-6 col-xxl-5">
            <motion.h1
              ref={ref5}
              initial={{ opacity: 0, y: -200 }}
              animate={inView5 ? "visible" : "hidden"}
              variants={variants3}
              transition={{ duration: 0.8, delay: 0.2, ease: easeInOut }}
              className="Heading-1 mb-10 ps-5 text-white fw-bold"
            >
              Embedded Systems Services
            </motion.h1>
            <motion.p
              ref={ref5}
              initial={{ opacity: 0, x: -200 }}
              animate={inView5 ? "visible" : "hidden"}
              variants={variants1}
              transition={{ duration: 0.9, delay: 0.3, ease: easeInOut }}
              className="Paragraph-1 fs-23 lh-sm mb-10 ps-4 text-white fw-bold "
            >
              Techsoc engineers complex embedded systems services that combine
              hardware and user interfaces with powerful software, connectivity,
              and proximity technologies. We cover the full embedded systems
              development cycle: from product strategy, design, and system
              development to implementing embedded integrations, testing, and
              user experience.
            </motion.p>
            <motion.div
              ref={ref5}
              initial={{ opacity: 0, y: 200 }}
              animate={inView5 ? "visible" : "hidden"}
              variants={variants2}
              transition={{ duration: 1, delay: 0.4, ease: easeInOut }}
              className=""
            >
              <button className="Button-1 btn btn-lg btn-primary btn-outline-white rounded-pill text-white">
                Read More
              </button>
            </motion.div>
          </div>
        </div>
      </div>
      {/* <div className="card position-relative" style={{ width: "18rem" }}>
        <div className="card-video-overlay position-absolute top-0 start-0 w-100 h-100">
          <video
            className="card-video position-absolute top-0 start-0 w-100 h-100"
            muted
            loop
            autoPlay
          >
            <source src={bgvideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div> */}
      <Tabs/>
      {/* <div>
      <ParticlesComponent id="particles" />
  

      </div> */}
    </>
  );
}

export default App;
