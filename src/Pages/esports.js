// index.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import './style/esports.css'; // Import your CSS file here
import muthi from "../res/bgmichar.png"
import lund from "../res/bgmievent.png"
import bg from "../res/phbg.JPG"
import { useEffect } from 'react';
import { Image } from 'react-bootstrap';

const Esports = () => {
  useEffect(() => {
    window.addEventListener('resize', function () {
      var windowWidth = window.innerWidth;

      if (windowWidth <= 956) {

        document.getElementById('navmenuButton')?.classList?.remove('hidden');
        document.getElementById('nav-menu')?.classList?.add('hidden');
      } else {
        document.getElementById('navmenuButton')?.classList?.add('hidden');
        document.getElementById('nav-menu')?.classList?.remove('hidden');
      }
    });
  })
    let x = 0;

    function togglenavbar() {
      if (x === 0) {
        x = x + 1;
        document.getElementById('nav-menu-side').classList.remove('hidden');
        document.getElementById('nav-menu-side').classList.add('nav-transition');
      } else {
        x = x - 1;
        document.getElementById('nav-menu-side').classList.remove('nav-transition');
        document.getElementById('nav-menu-side').classList.add('hidden');
      }
    }

    function handleMouseEnter() {
      document.getElementById('event-overlay').classList.remove('hidden');
      document.getElementById('event-overlay').classList.add('event-transition');
    }

    function removemouseleave() {
      document.getElementById('event-overlay').classList.add('hidden');
    }

    function handleMouseEnter1() {
      document.getElementById('event-overlay2').classList.remove('hidden');
      console.log("handle1");
    }

    function removemouseleave1() {
      document.getElementById('event-overlay2').classList.add('hidden');
      console.log("mouse out");
    }

    function handleMouseEnter2() {
      document.getElementById('event-overlay3').classList.remove('hidden');
      console.log("handle1");
    }

    function removemouseleave2() {
      document.getElementById('event-overlay3').classList.add('hidden');
      console.log("mouse out");
    }

    function openRegistration() {
      window.open('/registration/index.html', '_self');
    }

    console.log("sjcnsk");
  // Empty dependency array to run the effect only once

  return (
    <html lang="en">

    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>E-Sports | Aagaz</title>
      <link rel="stylesheet" href="style.css" />
      <link rel="shortcut icon" href="./favicon/favicon.ico" type="image/x-icon" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Rubik+Scribble&display=swap" rel="stylesheet" />
    </head>

    <body>
      <header>
       
      </header>
      <main>
        <div style={{display:'flex',alignItems:"center",justifyContent:"center"}} className="main-cont">
          <div id="espmain">

<a href='' style={{outline:"none",color:"white",textDecoration:"none"}}>
  <h2 style={{color:"white",outline:"none !important",textDecoration:"none"}}>
    Register Now
  </h2>
</a>

          </div>
          <Image className="bgmi-char"  alt="muthi" src={muthi} />
          <h1 className="why-esport">

          </h1>
        </div>

        <div className="cont2">
          <h1 className="fancy-text"></h1>
          <div className="pbg">
            <p className="about-udghosh">
              <span className="udgosh">AAGAZ</span> is the annual flagship sports festival organized by HBTU
              Kanpur, which is widely celebrated as one of the largest fest of its
              kind in India. It's a great way for students to refine their talents
              while also embracing the ferocious drive and dedication to
              perfection that define a successful athlete. Udghosh plans many
              sporting and electronic sports events to bring together the greatest
              collegiate athletes in the country.
            </p>
          </div>
        </div>
{/* 
        <div className="upcoming-events">
          <h1 className="upcoming">EVENTS</h1>
          <div className="events-name">
            <div className="event event1" onMouseEnter={handleMouseEnter} onMouseLeave={removemouseleave}>
              <div>
                <div className="event-overlay hidden" id="event-overlay">
                  <p className="text-bgmi">BGMI, or Battlegrounds Mobile India, is a popular battle royale game developed by
                    Krafton. It offers a thrilling gaming
                    experience where players fight to be the last one standing on a remote island. With various modes,
                    weapons, and
                    vehicles, it's a favorite for online gaming competitions, attracting millions of players in India.<br />
                    <button className="register" onClick={openRegistration}>Register</button>
                  </p>
                </div>
                <Image className="bgmi-char"  alt="muthi" src={lund} />
              </div>
            </div>
            <div className="event event1" onMouseEnter={handleMouseEnter1} onMouseLeave={removemouseleave1}>
              <div>
                <div className="event-overlay hidden" id="event-overlay2">
                  <p className="text-bgmi">Call of Duty (COD) is a popular first-person shooter game franchise developed by Activision. It offers a wide range of
                    games, including the Modern Warfare and Black Ops series, set in various historical and fictional settings. COD is known
                    for its fast-paced action, realistic graphics, and immersive multiplayer experience, making it a favorite among gamers
                    worldwide.<button className="register" onClick={openRegistration}>Register</button>
                  </p>
                </div>
                <img src="https://drive.google.com/thumbnail?id=1XSvqc6KYwxzH_jthclx19yYg2C4EIpRJ" alt="assa"/>
              </div>
            </div>
          </div>
        </div>

        <div className="cont5">
          <h2>Past Events</h2>
          <div className="hover-effect1"></div>
          <div className="hover-effect2"></div>
          <div className="hover-effect3"></div>
          <div className="hover-effect4"></div>
          <div className="hover-effect5"></div>
        </div> */}
      </main>
  
      <script src="https://kit.fontawesome.com/73c26b4bc1.js" crossorigin="anonymous"></script>
    </body>

    </html>
  );
};

export default Esports;
