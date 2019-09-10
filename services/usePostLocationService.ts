import { useEffect, useState } from 'react';
import { Service } from '../types/Service';
import { Location } from '../types/Location';
import { API_URL } from '../pages';

export interface Location {
  data: Location;
}

const usePostLocationService = () => {
  console.log(API_URL);
  const [result, setResult] = useState<Service<Location>>({
    status: 'loading',
  });

  useEffect(() => {
    fetch(`${API_URL}/locations/1/`)
      .then(response => response.json())
      .then(response => setResult({ status: 'loaded', payload: response }))
      .catch(error => setResult({ status: 'error', error }));
  }, []);

  return result;
};

export default usePostLocationService;
