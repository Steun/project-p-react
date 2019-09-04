import { useEffect, useState } from 'react';
import { Service } from '../types/Service';
import { Visit } from '../types/Visit';

export interface Visits {
    results: Visit[];
}

const usePostVisitService = () => {
    const [result, setResult] = useState<Service<Visits>>({
        status: 'loading'
    });

    useEffect(() => {
        fetch('http://project-p.vps101.tjuna.com/visits')
            .then(response => response.json())
            .then(response => setResult({ status: 'loaded', payload: response }))
            .catch(error => setResult({ status: 'error', error }));
    }, []);

    return result;
};

export default usePostVisitService;