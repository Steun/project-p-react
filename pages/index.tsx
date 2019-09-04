import React, {useState} from 'react'
import css from './_project.scss'

import Sidebar from '../components/sidebar/sidebar'
import Occupancy from '../components/statistics/occupancy/Occupancy'
import Visits from '../components/visits/Visits';

export interface Props {
    test2: string
}

export interface State {
    occupied: boolean,
}

class Home extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {occupied: false};
    }

    handleOccupancyClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.setState(({occupied}) => ({
            occupied: !occupied
        }));
    };

    componentDidMount() {
        // Fetch location data and update state
        fetch('https://project-p.vps101.tjuna.com/locations/1/')
            .then(res => res.json())
            .then(res => this.setState(Object.assign({}, this.state, res.data)))
    }

    render() {
        const {occupied} = this.state;

        return (
            <div className={css.wrapper}>
                <div className={css.project}>
                    <Sidebar/>

                    <main className={css.content}>
                        <Visits/>
                        <Occupancy occupied={occupied}/>
                        <button type="button" onClick={this.handleOccupancyClick}>Toggle occupancy</button>
                    </main>

                </div>
            </div>
        );
    }
}

export default Home
