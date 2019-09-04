import React from 'react';
import usePostVisitService from "../../services/usePostVisitService";

const Visits: React.FC<{}> = () => {
    const service = usePostVisitService();

    return (
        <div>
            {service.status === 'loading' && <div>Loading...</div>}
            {service.status === 'loaded' &&
            service.payload.results.map(visit => (
                <div key={visit.id}>{visit.duration}</div>
            ))}
            {service.status === 'error' && (
                <div>Error, the backend moved to the dark side.</div>
            )}
        </div>
    );
};

export default Visits;
