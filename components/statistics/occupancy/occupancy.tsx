import React from 'react'
import css from './occupancy.scss'


export interface Props {
    occupied: boolean
}

export const Occupancy: React.FunctionComponent<Props> = ({
    occupied,
}) => {


    return (
        <div className='occupancy'>
            <span>Occupied: </span>
            <span>{occupied ? 'Yes' : 'No'}</span>
        </div>
    );
};
// const Sidebar = () => (
//     <div className='occupancy'>
//         {occupied}
//     </div>
// );
//
export default Occupancy
