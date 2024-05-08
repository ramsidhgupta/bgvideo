import React, {useState} from "react";
import { useInView } from "react-intersection-observer";
import bgvideo from "./assets/bgvideo.mp4";
import sports from "./assets/sports.mp4";
import automotive from "./assets/automotive.mp4";
import healthcare from "./assets/healthcare.mp4";
import media from "./assets/media.mp4";
import consumer from "./assets/consumer.mp4";
import industry from "./assets/industry.mp4";


import "./ManyDivs.css";

export const ManyDivs = () => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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


  return (
    <>
      <section className="wrapper">
        <div className="container-fluid pt-md-8 pt-8 pt-md-0">
          <div className="center-div">
            <div className="row">
              <div className="col-lg-6 col-12 bg-info">
                <div className="row">
                  <div className="col-12 top-div bg-warning d-flex align-items-stretch p-0">
                    <div className="card position-relative w-100 m-0 cardRadius" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                      <div className="card-video-overlay position-absolute">
                      {isHovered && (
                        <video
                          className="card-video position-absolute"
                          muted
                          loop
                          autoPlay
                        >
                        
                          <source src={consumer} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                        <div className="overlayMainVideo"></div>
                      </div>
                      <div className="card-body d-flex flex-column justify-content-center">
                        <h5 className="card-title textDecor">
                          Consumer Electronics
                        </h5>
                        <p className="card-text">
                          From wearables and IoT devices to smart homes and
                          advanced security systems—we foster end-user
                          experience with solutions built with the latest
                          embedded technologies. Techsoc has two decades of
                          in-house expertise in developing consumer electronics
                          based on bare metal, BSP, RTOS, DSP, AOSP, and other
                          technologies.{" "}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="cl-12 top-div bg-secondary d-flex align-items-stretch p-0">
                    <div className="card position-relative w-100 m-0 cardRadius" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                      <div className="card-video-overlay position-absolute">
                      {isHovered && (
                        <video
                          className="card-video position-absolute"
                          muted
                          loop
                          autoPlay
                        >
                          <source src={industry} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                        <div className="overlayMainVideo"></div>
                      </div>
                      <div className="card-body d-flex flex-column justify-content-center">
                        <h5 className="card-title textDecor">
                          Industrial Manufacturing
                        </h5>
                        <p className="card-text">
                          Our embedded software development services help
                          businesses win big. We can improve your daily routine
                          with improved asset tracking and power control. If you
                          envisage more innovative scenarios, Techsoc is up to
                          the challenge. We help automate workflows on the
                          factory floor and improve safety at work.{" "}
                        </p>
                      </div>
                    </div>
                    {/* <p>Just For Demo</p> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 bg-info">
                <div className="row">
                  <div className="col-12 bg-success bottom-first-div d-flex align-items-stretch p-0">
                    {/* <p>Just For Demo</p> */}
                    <div className="card position-relative w-100 m-0 cardRadius" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                      <div className="card-video-overlay position-absolute">
                      {isHovered && (
                        <video
                          className="card-video position-absolute"
                          muted
                          loop
                          autoPlay
                        >
                          <source src={healthcare} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                        <div className="overlayMainVideo"></div>
                      </div>
                      <div className="card-body d-flex flex-column justify-content-center">
                        <h5 className="card-title textDecor">Healthcare</h5>
                        <p className="card-text">
                          Techsoc provides full-cycle embedded systems
                          development services for healthcare institutions as
                          well as companies that produce healthcare equipment.
                          We develop storage solutions, hardware, firmware, and
                          middleware components for medical devices and wearable
                          sensor systems for collecting and processing health
                          data.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-12 bottom-sec-div bg-danger d-flex align-items-stretch p-0">
                    {/* <p>Just For Demo</p> */}
                    <div className="card position-relative w-100 m-0 cardRadius" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                      <div className="card-video-overlay position-absolute">
                      {isHovered && (
                        <video
                          className="card-video position-absolute"
                          muted
                          loop
                          autoPlay
                        >
                          <source src={automotive} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                        <div className="overlaySmallVideo"></div>
                      </div>
                      <div className="card-body d-flex flex-column justify-content-center">
                        <h5 className="card-title textDecor">Automotive</h5>
                        <p className="card-text">
                          Our team provides full-cycle embedded development for
                          automotive embedded systems. We build in-vehicle
                          solutions like HMIs, system and ADAS controllers, and
                          connectivity mechanisms, as well as off-board software
                          for fleet management, remote vehicle diagnostics, and
                          cloud-based data management.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12 bottom-sec-div bg-primary d-flex align-items-stretch p-0">
                    {/* <p>Just For Demo</p> */}
                    <div className="card position-relative w-100 m-0 cardRadius" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                      <div className="card-video-overlay position-absolute">
                      {isHovered && (
                        <video
                          className="card-video position-absolute"
                          muted
                          loop
                          autoPlay
                        >
                          <source src={sports} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                        <div className="overlaySmallVideo"></div>
                      </div>
                      <div className="card-body d-flex flex-column justify-content-center">
                        <h5 className="card-title textDecor">Sports</h5>
                        <p className="card-text">
                          We work on solutions that improve
                          training and prevent injury, including projects for
                          professional sports, fitness, and rehabilitation. To
                          track and analyze physical performance, we build
                          wearables. Depending on the project, we equip devices
                          with different connectivity solutions—RFID, GPS/GIS,
                          or Bluetooth. 
                          </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 last-div bg-danger d-flex align-items-stretch p-0">
                <div className="card position-relative w-100 m-0 cardRadius" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <div className="card-video-overlay position-absolute">
                  {isHovered && (
                    <video
                      className="card-video position-absolute"
                      muted
                      loop
                      autoPlay
                    >
                      <source src={media} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                    <div className="overlaySmallVideo"></div>
                  </div>
                  <div className="card-body d-flex flex-column justify-content-center">
                    <h5 className="card-title textDecor">
                      Media & Entertainment
                    </h5>
                    <p className="card-text">
                      As part of our embedded solutions development services, we
                      craft media players, media processing and streaming tools,
                      software for content compression and protection, and media
                      storage solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ManyDivs;