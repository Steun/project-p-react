import React, { FC } from 'react';
import css from './OccupancyOverlay.scss';

export interface Props {
  occupied: boolean;
}

export const OccupancyOverlay: FC<Props> = props => {
  const { occupied } = props;

  return (
    <div
      className={`${css.overlay} ${occupied ? css.overlay__active : ''}`}
    />
  );
};

export default OccupancyOverlay;
