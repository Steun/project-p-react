import React, { useEffect, useState } from 'react';
import css from './_old.scss';
import io from 'socket.io-client';

import Meta from '../layouts/meta';
import Sidebar from '../components/sidebar/sidebar';
import Occupancy from '../components/statistics/occupancy/Occupancy';
import Visits from '../components/visits/Visits';
import OccupancyOverlay from '../components/occupancy-overlay/OccupancyOverlay';
import AverageDuration from "../components/statistics/average-duration/AverageDuration";

export const API_URL = 'http://project-p.vps101.tjuna.com';

export interface Props {
  occupied: boolean;
}

export const Old = () => {
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
        <div className={css.oldWrapper}>
          <OccupancyOverlay occupied={occupied} />
          <div className={css.project}>
            <Sidebar />

            <main className={css.content}>
              <Occupancy occupied={occupied} />
              <AverageDuration average_duration={average_duration}/>
              <Visits />
            </main>
          </div>
        </div>
      </>
  );
};

export default Old;
