import React, { FC } from 'react';
import usePostVisitService from '../../services/usePostVisitService';

const Visits: FC<{}> = () => {
  const service = usePostVisitService();

  return (
    <div>
      {service.status === 'loading' && <div>Loading...</div>}
      {service.status === 'loaded' &&
        service.payload.data.map(visit => (
          <div key={visit.id}>
            Visit {visit.id}: duration: {visit.duration}s
          </div>
        ))}
      {service.status === 'error' && (
        <div>Error, the backend moved to the dark side.</div>
      )}
    </div>
  );
};

export default Visits;
