import React from 'react'
import css from './_project.scss'

import Visits from '../components/visits/Visits';


import Sidebar from '../components/sidebar/sidebar'
import Occupancy from '../components/statistics/occupancy/occupancy'

export interface Props {
    test2: string
}

export interface State {
    occupied: boolean,
}

class Project extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = { occupied: false };
    }

    handleOccupancyClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.setState(({ occupied }) => ({
            occupied: !occupied
        }));
    };

    render() {
        const { occupied } = this.state;

        return (
            <div className={css.project}>
                <h1 className={css.title}>PROJECT P</h1>
                <Sidebar />
                <Visits/>

                <Occupancy occupied={occupied}/>
                <button onClick={this.handleOccupancyClick}>Toggle occupancy</button>

            </div>
        );
    }
}

export default Project
