import React, { useEffect, useState } from 'react';
import css from './_index.scss';
import io from 'socket.io-client';
import Meta from '../layouts/meta';
import { Visit } from '../types/Visit';
import OccupancyOverlay from "../components/occupancy-overlay/OccupancyOverlay";
export const API_URL = 'https://project-p.vps101.tjuna.com';

export interface Props {
  occupied: boolean;
}

export const Home = () => {
  const [occupied, setOccupied] = useState(false);
  const [average_duration, setAverage_duration] = useState(0);
  const [visits, setVisits] = useState(0);

  function fetchLocationData() {
    // Fetch location data and update state
    fetch(`${API_URL}/locations/1/`)
        .then(res => res.json())
        .then(res => {
          setOccupied(res.occupied);
          setAverage_duration(res.average_duration);
        });

    fetch(`${API_URL}/locations/1/visits`)
        .then(res => res.json())
        .then(res => {
          calculateVisitsAmount(res);
        });
  }

  useEffect(() => {
    fetchLocationData();
  }, []);

  useEffect(() => {
    const socket = io(`${API_URL}`);
    socket.on('connect', () => {
      console.info('connected to WebSockets!');
    });

    socket.on('visit', data => {
      console.log('visit!');
      console.log(data);
      fetchLocationData();
      // calculateVisitsAmount(data);
      // setOccupied(data.data.occupied);
    });
    socket.on('location', data => {
      const loc = JSON.parse(data);
      setOccupied(loc.occupied);
      setAverage_duration(loc.average_duration);
    });
    socket.on('disconnect', () => {
      console.info('disconnected WebSockets');
    });
  }, []);

  function appendZero(n: number): string {
    return (n < 10) ? `0${n}` : n.toString();
  }

  function calculateVisitsAmount(data: Visit[]) {
    const today = new Date();
    if (data.length > 0) {
      const visitsToday = data.filter(
          visit => new Date(visit.start_time).getDate() === today.getDate()
      );
      setVisits(visitsToday.length);
    }

  }

  return (
      <>
        <Meta />
        <div className={css.wrapper}>
          <OccupancyOverlay occupied={occupied} />
          <div className={css.container}>
            <span className={css.count}>{visits === 0 ? '...' : appendZero(visits)}</span>
            <span className={css.countDescription}>
            Kleine en grote boodschappen
          </span>
            <span className={css.date}>{new Date().toLocaleDateString()}</span>
            <div className={css.occupancy}>
              <i className={css.iconLock}></i>
              <span className={css.description}>Kan ik?</span>
              <span className={css.occupied}>{occupied ? 'Nope' : 'Zeker!'}</span>
            </div>
            <div className={css.smell}>
              <i className={css.iconCloud}></i>
              <span className={css.description}>Locatie</span>
              <span className={css.smellType}>beneden</span>
            </div>
          </div>
        </div>
      </>
  );
};

export default Home;
