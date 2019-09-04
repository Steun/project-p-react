import React from 'react';
import usePostLocationService from "../../services/usePostLocationService";

const Location: React.FunctionComponent<{}> = () => {
    const service = usePostLocationService();

    return (
        <div>
            {service.status === 'loading' && <div>Loading...</div>}
            {service.status === 'loaded' &&
                <div key={service.payload.id}>
                    Location {service.payload.id}:
                    duration: {service.payload.average_duration}s</div>
            }
            {service.status === 'error' && (
                <div>Error, the backend moved to the dark side.</div>
            )}
        </div>
    );
};

export default Location;
