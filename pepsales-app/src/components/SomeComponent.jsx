
import { useEffect, useState } from 'react';
import { fetchData } from '../services/api';

const SomeComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData('quote-equity?symbol=RELIANCE')
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {data ? <div>{JSON.stringify(data)}</div> : <p>Loading...</p>}
    </div>
  );
};

export default SomeComponent;
