import React, { FC } from 'react';
import css from './Occupancy.scss';

export interface Props {
  occupied: boolean;
}

export const Occupancy: FC<Props> = props => {
  const { occupied } = props;

  return (
    <div className={css.occupancy}>
      <span>Bezet: </span>
      <span>{occupied ? 'Ja' : 'Nee'}</span>
    </div>
  );
};

export default Occupancy;
