import React, {FC} from 'react'
import css from './Occupancy.scss'


export interface Props {
    occupied: boolean
}

export const Occupancy: FC<Props> = (props) => {
    const { occupied } = props;

    return (
        <div className='occupancy'>
            <span>Occupied: </span>
            <span>{occupied ? 'Yes' : 'No'}</span>
        </div>
    );
};

export default Occupancy
