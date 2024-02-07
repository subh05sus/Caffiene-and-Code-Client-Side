import React, { Suspense, useEffect, useState } from "react";
import "./Homepage.css"; // Import your CSS file for styling
import devfolioImage from "./assets/devfolio.png";
import CountdownTimer from "./countdown";
import FAQ from "./FAQ";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaDiscord, FaLinkedin } from "react-icons/fa";

import { Canvas } from "@react-three/fiber";
import ThreeD from "./threeDModel.js";
// import "@google/model-viewer";

import ReactSimplyCarousel from "react-simply-carousel";

import CardSpotlightEffect from "./CardSpotlightEffect";
// ---------------mentors------------------------
import Ankita from "./mentors/Ankita Mishra.jpg";
import Himesh from "./mentors/Himesh Parashar.jpg";
import Ishita from "./mentors/Ishita Raina.jpg";
import Khushi from "./mentors/Khushi Goyal.jpg";
import Krithik from "./mentors/Krithik D.jpg";
import Namya from "./mentors/Namya Jain.jpg";
import Nandani from "./mentors/Nandani Jindal.jpg";

const Homepage = ({ setProgress }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const particlesInit = useCallback(
    async (engine) => {
      setProgress(30);
      await loadSlim(engine);
      setProgress(100);
    },
    [setProgress]
  );

  const particlesLoaded = useCallback(async (container) => {}, []);
  return (
    <div className="homepage-container">
      <section id="hero" className="main-dark-section">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#11152000",
              },
              image: "",
              position: "",
              repeat: "",
              size: "",
              opacity: 1,
            },
            fullScreen: {
              enable: true,
              zIndex: -100,
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 3,
                },
                repulse: {
                  distance: 150,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 40,
              },
              opacity: {
                value: 0.1,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
        <div className="hero-content">
          <h2>
            <span className="hero-text">Caffeine and Code</span>
          </h2>
          <p>
            <span className="cyan-text">Fueling Open Source Adventures</span>
          </p>
          <CountdownTimer />

          <a
            className="register-button"
            style={{ marginTop: "20px" }}
            href="https://caffeine-and-code.devfolio.co/"
            target="_blank"
            rel="noreferrer"
          >
            Register
          </a>
        </div>
      </section>
      <section>
        <div className="button-container"></div>
      </section>

      <section id="sponsor" className="light-section">
        <div className="sponsor-content">
          <h2>Our Sponsors</h2>
          <p>Special thanks to our sponsors for their generous support.</p>
          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img className="sponsorImage" src={devfolioImage} alt="replit" />
            </div>
          </div>
          <p
            style={{
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Support our mission by becoming a sponsor! Your contributions help
            us make a positive impact on the community.
          </p>
          <button className="dark-tone">Sponsor Us</button>
        </div>
      </section>

      <section id="timeline" className="dark-section">
        <div style={{ position: "absolute", height: "900px", width: "90vw" }}>
          <Canvas className="canvas">
            <ambientLight intensity={0.05} />
            <directionalLight position={[-2, 5, 2]} />
            <Suspense fallback={null}>
              <ThreeD />
            </Suspense>
          </Canvas>
        </div>
        <div className="timeline-content">
          <h2>Event Timeline</h2>
          <h4 style={{ color: "#555" }}>
            Have a look what we scheduled for you!
          </h4>
        </div>

        <ul className="timeline">
          <li>
            <div className="direction-r">
              <div className="flag-wrapper">
                <span className="flag">Registration Starts</span>
              </div>
              <div className="desc">11 Jan 2024</div>
            </div>
          </li>

          <li>
            <div className="direction-l">
              <div className="flag-wrapper">
                <span className="flag">
                  Project and Mentor Registration Starts
                </span>
              </div>
              <div className="desc">20 Jan 2024</div>
            </div>
          </li>

          <li>
            <div className="direction-r">
              <div className="flag-wrapper">
                <span className="flag">Registration Ends</span>
              </div>
              <div className="desc">25 Feb 2024</div>
            </div>
          </li>

          <li>
            <div className="direction-l">
              <div className="flag-wrapper">
                <span className="flag">
                  Project and Mentor Registration Ends
                </span>
              </div>
              <div className="desc">08 Mar 2024</div>
            </div>
          </li>

          <li>
            <div className="direction-r">
              <div className="flag-wrapper">
                <span className="flag">Event Begins</span>
              </div>
              <div className="desc">10 Mar 2024</div>
            </div>
          </li>

          <li>
            <div className="direction-l">
              <div className="flag-wrapper">
                <span className="flag">Event Closes</span>
              </div>
              <div className="desc">24 Mar 2024</div>
            </div>
          </li>

          <li>
            <div className="direction-r">
              <div className="flag-wrapper">
                <span className="flag">Result</span>
              </div>
              <div className="desc">30 Mar 2024</div>
            </div>
          </li>
        </ul>
      </section>
      <section className="light-section">
        <div className="socials-content">
          <h2>Wanna become a mentor?</h2>
          <p
            style={{
              marginBottom: "20px",
            }}
          >
            Share your knowledge and experience with aspiring developers. Join
            us as a mentor and help others on their open-source journey.
          </p>
          <a
            className="dark-tone"
            style={{ marginBottom: "20px", marginTop: "20px" }}
            href="https://caffeine-and-code.devfolio.co/"
            target="_blank"
            rel="noreferrer"
          >
            Become A Mentor
          </a>

          <div style={{ marginBottom: "20px", marginTop: "20px" }}>
            <ReactSimplyCarousel
              activeSlideIndex={activeSlideIndex}
              onRequestChange={setActiveSlideIndex}
              itemsToShow={1}
              itemsToScroll={1}
              forwardBtnProps={{
                style: {
                  alignSelf: "center",
                  background: "black",
                  border: "none",
                  borderRadius: "50%",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "20px",
                  height: 30,
                  lineHeight: 1,
                  textAlign: "center",
                  width: 30,
                },
                children: <span>{`>`}</span>,
              }}
              backwardBtnProps={{
                //here you can also pass className, or any other button element attributes
                style: {
                  alignSelf: "center",
                  background: "black",
                  border: "none",
                  borderRadius: "50%",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "20px",
                  height: 30,
                  lineHeight: 1,
                  textAlign: "center",
                  width: 30,
                },
                children: <span>{`<`}</span>,
              }}
              responsiveProps={[
                {
                  itemsToShow: 3,
                  itemsToScroll: 1,
                  minWidth: 768,
                  infinite: true,
                },
              ]}
              speed={400}
              easing="linear"
            >

              <div style={{ width: 200, height: 250, padding: 10 }}>
                <CardSpotlightEffect style={{ margin: "10px" }}>
                  <div
                    style={{
                      width: 160,
                      height: 210,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      flexDirection: "column",
                    }}
                  >
                    <img
                      src={Ankita}
                      alt=""
                      style={{
                        height: '100px',
                        borderRadius:'50px'
                      }}
                    />
                    Ankita Mishra
                  </div>
                </CardSpotlightEffect>
              </div>

              <div style={{ width: 200, height: 250, padding: 10 }}>
                <CardSpotlightEffect style={{ margin: "10px" }}>
                  <div
                    style={{
                      width: 160,
                      height: 210,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      flexDirection: "column",
                    }}
                  >
                    <img
                      src={Himesh}
                      alt=""
                      style={{
                        height: '100px',
                        borderRadius:'50px'
                      }}
                    />
                    Himesh Parashar
                  </div>
                </CardSpotlightEffect>
              </div>

              <div style={{ width: 200, height: 250, padding: 10 }}>
                <CardSpotlightEffect style={{ margin: "10px" }}>
                  <div
                    style={{
                      width: 160,
                      height: 210,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      flexDirection: "column",
                    }}
                  >
                    <img
                      src={Ishita}
                      alt=""
                      style={{
                        height: '100px',
                        borderRadius:'50px'
                      }}
                    />
                    Ishita Raina
                  </div>
                </CardSpotlightEffect>
              </div>

            

              <div style={{ width: 200, height: 250, padding: 10 }}>
                <CardSpotlightEffect style={{ margin: "10px" }}>
                  <div
                    style={{
                      width: 160,
                      height: 210,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      flexDirection: "column",
                    }}
                  >
                    <img
                      src={Khushi}
                      alt=""
                      style={{
                        height: '100px',
                        borderRadius:'50px'
                      }}
                    />
                    Khushi Goyal
                  </div>
                </CardSpotlightEffect>
              </div>

              <div style={{ width: 200, height: 250, padding: 10 }}>
                <CardSpotlightEffect style={{ margin: "10px" }}>
                  <div
                    style={{
                      width: 160,
                      height: 210,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      flexDirection: "column",
                    }}
                  >
                    <img
                      src={Krithik}
                      alt=""
                      style={{
                        height: '100px',
                        borderRadius:'50px'
                      }}
                    />
                    Krithik D
                  </div>
                </CardSpotlightEffect>
              </div>

              <div style={{ width: 200, height: 250, padding: 10 }}>
                <CardSpotlightEffect style={{ margin: "10px" }}>
                  <div
                    style={{
                      width: 160,
                      height: 210,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      flexDirection: "column",
                    }}
                  >
                    <img
                      src={Namya}
                      alt=""
                      style={{
                        height: '100px',
                        borderRadius:'50px'
                      }}
                    />
                    Namya Jain
                  </div>
                </CardSpotlightEffect>
              </div>
              <div style={{ width: 200, height: 250, padding: 10 }}>
                <CardSpotlightEffect style={{ margin: "10px" }}>
                  <div
                    style={{
                      width: 160,
                      height: 210,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      flexDirection: "column",
                    }}
                  >
                    <img
                      src={Nandani}
                      alt=""
                      style={{
                        height: '100px',
                        borderRadius:'50px'
                      }}
                    />
                    Nandani Jindal
                  </div>
                </CardSpotlightEffect>
              </div>

            


            </ReactSimplyCarousel>
          </div>
        </div>
      </section>
      <section className="dark-section">
        <div className="socials-content">
          <div>
            <h1>Community Partners</h1>
          </div>
        </div>
      </section>

      <section id="faq" className="light-section">
        <div className="faq-content">
          <FAQ />
        </div>
      </section>

      <section id="socials" className="dark-section">
        <div className="socials-content">
          <img
            src="https://phicsit.in/wp-content/uploads/2023/12/phy.png"
            style={{
              width: "50px",
              margin: "20px",
            }}
            alt=""
          />
          <h2>Connect with Us</h2>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/PHICSIT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com/PHICSIT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/phicsit.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/phicsit/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://discord.com/invite/zt3hVmENcX"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord />
            </a>
          </div>
          <div
            className="contact-content"
            style={{
              marginTop: "15px",
            }}
          >
            <p>
              For any inquiries or assistance, feel free to reach out to us via
              email.
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:info@phicsit.in"
                style={{
                  textDecorationLine: "none",
                  color: "gray",
                }}
              >
                info@yourdomain.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
