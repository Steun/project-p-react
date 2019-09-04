import { useEffect, useState } from 'react';
import { Service } from '../types/Service';
import { Location } from '../types/Location';

export interface Location {
    data: Location;
}

const usePostLocationService = () => {
    const [result, setResult] = useState<Service<Location>>({
        status: 'loading'
    });

    useEffect(() => {
        fetch('http://project-p.vps101.tjuna.com/location/1/')
            .then(response => response.json())
            .then(response => setResult({ status: 'loaded', payload: response }))
            .catch(error => setResult({ status: 'error', error }));
    }, []);

    return result;
};

export default usePostLocationService;