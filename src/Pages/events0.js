import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './../App.css';
import './../Pages/style/events.css';
import { Link } from 'react-router-dom';

// import Events1 from './events1';
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

const events0 = () => {

  const _event1 = ({ children }) => (
    <div>
      <h1>OPENING CEREMONY</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event2 = ({ children }) => (
    <div>
      <h1>100 Meters</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event3 = ({ children }) => (
    <div>
      <h1>200 Meters</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event4 = ({ children }) => (
    <div>
      <h1>400 Meters</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event5 = ({ children }) => (
    <div>
      <h1>800 Meters</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event6 = ({ children }) => (
    <div>
      <h1>Cricket</h1>
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
      <h1>Volleyball</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event9 = ({ children }) => (
    <div>
      <h1>E-Sports</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event10 = ({ children }) => (
    <div>
      <h1>Table Tennis</h1>
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
      <h1>Badminton</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event13 = ({ children }) => (
    <div>
      <h1>Shott putt</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event14 = ({ children }) => (
    <div>
      <h1>Javelin throw</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event15 = ({ children }) => (
    <div>
      <h1>Discuss throw</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event16 = ({ children }) => (
    <div>
      <h1>Power lifting</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event17 = ({ children }) => (
    <div>
      <h1>Weight Lifting</h1>
      <h5>Venue : </h5>
    </div>
  );


  return (
    <section className='eventStyle1 mainSection'>
      <span style={{ fontSize: "60px" }}>EVENTS</span>
      <span className='eventPageSpaces'>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span>
      <span className='eventPageBRs'>
        <br></br><br></br>
      </span>
      <span>
        <span className='choosedDayStyle'>
          Day 1
        </span>
        <span className='dayChooserStyle'>
          <Link className='link' to="/Events1">Day 2</Link>
        </span>
        <span className='dayChooserStyle'>
          <Link className='link' to="/Events2">Day 3</Link>
        </span>
      </span>

      <div className='eventsArea'>
        <Timeline theme={customTheme}>
          <Events>

            <TextEvent date="TBD" card={_event1} />
            <TextEvent date="TBD" card={_event2} />
            <TextEvent date="TBD" card={_event3} />
            <TextEvent date="TBD" card={_event4} />
            <TextEvent date="TBD" card={_event5} />
            <TextEvent date="TBD" card={_event6} />
            <TextEvent date="TBD" card={_event7} />
            <TextEvent date="8:30" card={_event8} />
            <TextEvent date="9:00" card={_event9} />
            <TextEvent date="9:00" card={_event10} />
            <TextEvent date="9:00" card={_event11} />
            <TextEvent date="9:00" card={_event12} />
            <TextEvent date="9:00" card={_event13} />
            <TextEvent date="9:00" card={_event14} />
            <TextEvent date="9:00" card={_event15} />
            <TextEvent date="10:00" card={_event16} />
            <TextEvent date="10:00" card={_event17} />
          </Events>
        </Timeline>
      </div>
    </section>
  )
}

export default events0