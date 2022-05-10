import { Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import '../App.css';
import GoogleMapReact from 'google-map-react';
import { getMyEvents, getEventsList } from '../modules/api.js';

const AnyReactComponent = ({ text }) => <div color="red">{text}</div>;

export default function Map() {
  const mapCenter = {
    lat: 39.966333,
    lng: -75.197123,
  };
  let liveEvents = useRef({
    data: [
      {
        name: 'event1',
        coordinates: {
          latitude: 39.966333,
          longitude: -75.197123,
        },
      },
      {
        name: 'event1',
        coordinates: {
          latitude: 39.951641,
          longitude: -75.152672,
        },
      },
    ],
  });
  let userEvents = useRef({ data: [] });
  // const [numEvents, setNumEvents] = useState(0);
  // const [numUserEvents, setNumUserEvents] = useState(0);

  // useEffect(() => {
  //   async function fetchEvents() {
  //     liveEvents.current = await getEventsList();
  //     // update the state
  //     setNumEvents(liveEvents.current.length);
  //     console.log('liveEvents', liveEvents.current);
  //   }

  //   async function fetchUserEvents() {
  //     userEvents.current = await getMyEvents(
  //       localStorage.getItem('currentUser')
  //     );
  //     // update the state
  //     setNumUserEvents(userEvents.current.length);
  //     console.log('userEvents', userEvents.current);
  //     console.log('user', localStorage.getItem('currentUser'));
  //   }

  //   // we want to fetch the users frequently (5 s)
  //   //we will use server polling with setInterval
  //   setTimeout(() => {
  //     fetchEvents();
  //     fetchUserEvents();
  //   }, 5000);
  //   //fetchUsers();
  // }, [numEvents, numUserEvents]);

  const Marker = (liveEvents) => {
    return <div className="eventPin"></div>;
  };

  return (
    <main style={{ padding: '1rem 0' }}>
      <nav
        className="navBar"
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/home">Home</Link> | <Link to="/events">Events</Link> |{' '}
        <Link to="/community">Community</Link> | <Link to="/map">Map</Link> |{' '}
        <Link to="/account">Account</Link>
      </nav>
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBF_GZAnp2COLaqW6Bt4eah7e28cMB4u2c' }}
          defaultCenter={mapCenter}
          defaultZoom={10}
        >
          <AnyReactComponent
            lat={mapCenter.lat}
            lng={mapCenter.lng}
            text="My Marker"
            color="red"
          />
          {/* <Marker
            lat={liveEvents.coordinates.latitude}
            lng={liveEvents.coordinates.longitude}
          /> */}
        </GoogleMapReact>
      </div>
    </main>
  );
}
