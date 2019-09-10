import { useEffect, useState } from 'react';
import { Service } from '../types/Service';
import { Visit } from '../types/Visit';
import { API_URL } from '../pages';

export interface Visits {
  data: Visit[];
}

const usePostVisitService = () => {
  const [result, setResult] = useState<Service<Visits>>({
    status: 'loading',
  });

  useEffect(() => {
    fetch(`${API_URL}/visits`)
      .then(response => response.json())
      .then(response => setResult({ status: 'loaded', payload: response }))
      .catch(error => setResult({ status: 'error', error }));
  }, []);

  return result;
};

export default usePostVisitService;
