import React, { useEffect, useState } from 'react';
import css from './_index.scss';

import Meta from '../layouts/meta';
import Sidebar from '../components/sidebar/sidebar';
import Occupancy from '../components/statistics/occupancy/Occupancy';
import Visits from '../components/visits/Visits';

export interface Props {
  occupied: boolean;
}

export const Home = () => {
  const [occupied, setOccupied] = useState(false);

  useEffect(() => {
    // Fetch location data and update state
    fetch('https://project-p.vps101.tjuna.com/locations/1/')
      .then(res => res.json())
      .then(res => {
        setOccupied(res.data.occupied);
      });
  }, []);

  function handleOccupancyClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setOccupied(!occupied);
  }

  return (
      <>
        <Meta />
        <div className={css.wrapper}>
          <div className={css.project}>
            <Sidebar />

            <main className={css.content}>
              <Occupancy occupied={occupied} />
              <button type="button" onClick={handleOccupancyClick}>
                Toggle occupancy
              </button>
              <Visits />
            </main>
          </div>
        </div>
      </>
  );
};

// class Home extends React.Component<Props, State> {
//     constructor(props) {
//         super(props);
//         this.state = {occupied: false};
//     }
//
//     handleOccupancyClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//         this.setState(({occupied}) => ({
//             occupied: !occupied
//         }));
//     };
//
//     componentDidMount() {
//         // Fetch location data and update state
//         fetch('https://project-p.vps101.tjuna.com/locations/1/')
//             .then(res => res.json())
//             .then(res => this.setState(Object.assign({}, this.state, res.data)))
//     }
//
//     render() {
//         const {occupied} = this.state;
//
//         return (
//             <div className={css.wrapper}>
//                 <div className={css.project}>
//                     <Sidebar/>
//
//                     <main className={css.content}>
//                         <Visits/>
//                         <Occupancy occupied={occupied}/>
//                         <button type="button" onClick={this.handleOccupancyClick}>Toggle occupancy</button>
//                     </main>
//
//                 </div>
//             </div>
//         );
//     }
// }

export default Home;
