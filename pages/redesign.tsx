import React, { useEffect, useState } from 'react';
import css from './redesign.scss';
import io from 'socket.io-client';
import Meta from '../layouts/meta';
export const API_URL = 'http://project-p.vps101.tjuna.com';

export interface Props {
  occupied: boolean;
}

export const Redesign = () => {
  const [occupied, setOccupied] = useState(false);
  const [average_duration, setAverage_duration] = useState(0);

  function fetchLocationData() {
  // Fetch location data and update state
  fetch(`${API_URL}/locations/1/`)
    .then(res => res.json())
    .then(res => {
      setOccupied(res.occupied);
      setAverage_duration(res.average_duration);
    });
  }

  useEffect(() => {
    fetchLocationData()
  }, []);

  useEffect(() => {
    const socket = io(`${API_URL}`);
    socket.on('connect', () => {
      console.info('connected to WebSockets!');
    });

    socket.on('visit', (data) => {
      console.log('visit!');
      console.log(data);
      // setOccupied(data.data.occupied);
    });
    socket.on('location', (data) => {
      const loc = JSON.parse(data);
      setOccupied(loc.occupied);
      setAverage_duration(loc.average_duration);
    });
    socket.on('disconnect', () => {
      console.info('disconnected WebSockets');
    });

  }, []);

  return (
    <>
      <Meta />
      <div className={css.wrapper}>
        <div className={css.container}>
            <span className={css.count}>17</span>
            <span className={css.date}>19 / 09 / 2019</span>
            <span className={css.countDescription}>Kleine en grote boodschappen</span>
            <div className={css.occupancy}>
                <i className={css.iconLock}></i>
                <span className={css.description}>Kan ik?</span>
                <span className={css.occupied}>{occupied ? 'Nope' : 'Zeker!'}</span>
            </div>
            <div className={css.smell}>
                <i className={css.iconCloud}></i>
                <span className={css.description}>Geur?</span>
                <span className={css.smellType}>Frissig</span>
            </div>
        </div>
      </div>
    </>
  );
};

export default Redesign;
