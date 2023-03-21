import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import { axiosRequest } from "../utils/axiosRequest";

const Home = () => {
  const [home, setHome] = useState(null);
  const quillRef = useRef();

  const getLogoData = async () => {
    try {
      const { data } = await axiosRequest.get("home");
      setHome(data);
    } catch (error) {}
  };

  useEffect(() => {
    getLogoData();
  }, []);
  return (
    <div>
      {/* <!-- Navbar (sit on top) --> */}
      <div class="w3-top">
        <div class="w3-bar w3-white w3-wide w3-padding w3-card">
          <a href="#home" class="w3-bar-item w3-button">
            {home !== null ? (
              <div dangerouslySetInnerHTML={{ __html: home.logo.tj }} />
            ) : null}
          </a>
          {/* <!-- Float links to the right. Hide them on small screens --> */}
          <div class="w3-right w3-hide-small">
            <a href="#projects" class="w3-bar-item w3-button">
              Projects
            </a>
            <a href="#about" class="w3-bar-item w3-button">
              About
            </a>
            <a href="#contact" class="w3-bar-item w3-button">
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Header --> */}
      <header
        class="w3-display-container w3-content w3-wide"
        style={{ maxWidth: 1500 }}
        id="home"
      >
        <img
          class="w3-image"
          src="/w3images/architect.jpg"
          alt="Architecture"
          width="1500"
          height="800"
        />
        <div class="w3-display-middle w3-margin-top w3-center">
          <h1 class="w3-xxlarge w3-text-white">
            <span class="w3-padding w3-black w3-opacity-min">
              <b>BR</b>
            </span>{" "}
            <span class="w3-hide-small w3-text-light-grey">Architects</span>
          </h1>
        </div>
      </header>

      {/* <!-- Page content --> */}
      <div class="w3-content w3-padding" style={{ maxWidth: 1564 }}>
        {/* <!-- Project Section --> */}
        <div class="w3-container w3-padding-32" id="projects">
          <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">
            Projects
          </h3>
        </div>

        <div class="w3-row-padding">
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-display-container">
              <div class="w3-display-topleft w3-black w3-padding">
                Summer House
              </div>
              <img
                src="/w3images/house5.jpg"
                alt="House"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-display-container">
              <div class="w3-display-topleft w3-black w3-padding">
                Brick House
              </div>
              <img
                src="/w3images/house2.jpg"
                alt="House"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-display-container">
              <div class="w3-display-topleft w3-black w3-padding">
                Renovated
              </div>
              <img
                src="/w3images/house3.jpg"
                alt="House"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-display-container">
              <div class="w3-display-topleft w3-black w3-padding">
                Barn House
              </div>
              <img
                src="/w3images/house4.jpg"
                alt="House"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>

        <div class="w3-row-padding">
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-display-container">
              <div class="w3-display-topleft w3-black w3-padding">
                Summer House
              </div>
              <img
                src="/w3images/house2.jpg"
                alt="House"
                style={{ width: "99%" }}
              />
            </div>
          </div>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-display-container">
              <div class="w3-display-topleft w3-black w3-padding">
                Brick House
              </div>
              <img
                src="/w3images/house5.jpg"
                alt="House"
                style={{ width: "99%" }}
              />
            </div>
          </div>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-display-container">
              <div class="w3-display-topleft w3-black w3-padding">
                Renovated
              </div>
              <img
                src="/w3images/house4.jpg"
                alt="House"
                style={{ width: "99%" }}
              />
            </div>
          </div>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-display-container">
              <div class="w3-display-topleft w3-black w3-padding">
                Barn House
              </div>
              <img
                src="/w3images/house3.jpg"
                alt="House"
                style={{ width: "99%" }}
              />
            </div>
          </div>
        </div>

        {/* <!-- About Section --> */}
        <div class="w3-container w3-padding-32" id="about">
          <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">
            About
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>

        <div class="w3-row-padding w3-grayscale">
          <div class="w3-col l3 m6 w3-margin-bottom">
            <img
              src="/w3images/team2.jpg"
              alt="John"
              style={{ width: "100%" }}
            />
            <h3>John Doe</h3>
            <p class="w3-opacity">CEO & Founder</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
            <p>
              <button class="w3-button w3-light-grey w3-block">Contact</button>
            </p>
          </div>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <img
              src="/w3images/team1.jpg"
              alt="Jane"
              style={{ width: "100%" }}
            />
            <h3>Jane Doe</h3>
            <p class="w3-opacity">Architect</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
            <p>
              <button class="w3-button w3-light-grey w3-block">Contact</button>
            </p>
          </div>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <img
              src="/w3images/team3.jpg"
              alt="Mike"
              style={{ width: "100%" }}
            />
            <h3>Mike Ross</h3>
            <p class="w3-opacity">Architect</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
            <p>
              <button class="w3-button w3-light-grey w3-block">Contact</button>
            </p>
          </div>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <img
              src="/w3images/team4.jpg"
              alt="Dan"
              style={{ width: "100%" }}
            />
            <h3>Dan Star</h3>
            <p class="w3-opacity">Architect</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
            <p>
              <button class="w3-button w3-light-grey w3-block">Contact</button>
            </p>
          </div>
        </div>

        {/* <!-- Contact Section --> */}
        <div class="w3-container w3-padding-32" id="contact">
          <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">
            Contact
          </h3>
          <p>Lets get in touch and talk about your next project.</p>
          <form action="/action_page.php" target="_blank">
            <input
              class="w3-input w3-border"
              type="text"
              placeholder="Name"
              required
              name="Name"
            />
            <input
              class="w3-input w3-section w3-border"
              type="text"
              placeholder="Email"
              required
              name="Email"
            />
            <input
              class="w3-input w3-section w3-border"
              type="text"
              placeholder="Subject"
              required
              name="Subject"
            />
            <input
              class="w3-input w3-section w3-border"
              type="text"
              placeholder="Comment"
              required
              name="Comment"
            />
            <button class="w3-button w3-black w3-section" type="submit">
              <i class="fa fa-paper-plane"></i> SEND MESSAGE
            </button>
          </form>
        </div>

        {/* <!-- Image of location/map --> */}
        <div class="w3-container">
          <img
            src="/w3images/map.jpg"
            class="w3-image"
            style={{ width: "100%" }}
            alt="a"
          />
        </div>

        {/* <!-- End page content --> */}
      </div>

      {/* <!-- Footer --> */}
      <footer class="w3-center w3-black w3-padding-16">
        <p>
          Powered by{" "}
          <a
            href="https://www.w3schools.com/w3css/default.asp"
            title="W3.CSS"
            target="_blank"
            class="w3-hover-text-green"
          >
            w3.css
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
