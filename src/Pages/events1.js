import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './../App.css';
import './../Pages/style/events.css';
import { Link } from 'react-router-dom';

// import Events0 from './events0';
// import Events2 from './events2';

import {
  Timeline,
  Events,
  TextEvent,
  themes,
  createTheme,
} from '@merc/react-timeline';

const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: '#efefef',
  },
  date: {
    backgroundColor: '#f7141b',
  },
  marker: {
    borderColor: '#f7141b',
  },
  timelineTrack: {
    backgroundColor: '#f7141b',
  },
});

const events1 = () => {

  const _event1 = ({ children }) => (
    <div>
      <h1>Cross Country</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event2 = ({ children }) => (
    <div>
      <h1>High Jump</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event3 = ({ children }) => (
    <div>
      <h1>Long Jump</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event4 = ({ children }) => (
    <div>
      <h1>Triple Jump</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event5 = ({ children }) => (
    <div>
      <h1>Relay Race ( 2*200 )</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event6 = ({ children }) => (
    <div>
      <h1>Relay Race ( 4*200 )</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event7 = ({ children }) => (
    <div>
      <h1>Basketball</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event8 = ({ children }) => (
    <div>
      <h1>Cricket</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event9 = ({ children }) => (
    <div>
      <h1>Volleyball</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event10 = ({ children }) => (
    <div>
      <h1>Badminton</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event11 = ({ children }) => (
    <div>
      <h1>Kabaddi</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event12 = ({ children }) => (
    <div>
      <h1>Chess</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event13 = ({ children }) => (
    <div>
      <h1>Carrom</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event14 = ({ children }) => (
    <div>
      <h1>E-sports</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event15 = ({ children }) => (
    <div>
      <h1>Football</h1>
      <h5>Venue : </h5>
    </div>
  );

  return (
    <section className='eventStyle2 mainSection'>
      <span style={{ fontSize: "60px" }}>EVENTS</span>
      <span className='eventPageSpaces'>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span>
      <span className='eventPageBRs'>
        <br></br><br></br>
      </span>
      <span>
        <span className='dayChooserStyle'>
          <Link className='link' to="/Events0">Day 1</Link>
        </span>
        <span className='choosedDayStyle'>
          Day 2
        </span>
        <span className='dayChooserStyle'>
          <Link className='link' to="/Events2">Day 3</Link>
        </span>
      </span>

      <div className='eventsArea'>
        <Timeline theme={customTheme}>
          <Events>

            <TextEvent date="9:00" card={_event1} />
            <TextEvent date="9:00" card={_event2} />
            <TextEvent date="9:00" card={_event3} />
            <TextEvent date="9:00" card={_event4} />
            <TextEvent date="9:00" card={_event5} />
            <TextEvent date="10:00" card={_event6} />
            <TextEvent date="10:00" card={_event7} />
            <TextEvent date="10:00" card={_event8} />
            <TextEvent date="10:00" card={_event9} />
            <TextEvent date="10:00" card={_event10} />
            <TextEvent date="11:00" card={_event11} />
            <TextEvent date="12:00" card={_event12} />
            <TextEvent date="12:00" card={_event13} />
            <TextEvent date="12:00" card={_event14} />
            <TextEvent date="12:30" card={_event15} />

          </Events>
        </Timeline>
      </div>
    </section>
  )
}

export default events1