import React, { FC } from 'react';
import './OccupancyOverlay.scss';

export interface Props {
  occupied: boolean;
}

export const OccupancyOverlay: FC<Props> = props => {
  const { occupied } = props;

  return (
    <div
      className={`overlay ${occupied ? 'overlay__active' : ''}`}
    />
  );
};

export default OccupancyOverlay;
