import { useState } from 'react';
import useCustomAnalysisStratsQuery from './useCustomAnalysisStratsQuery';

const StrategiesComponent = () => {
  const [includeDetails, setIncludeDetails] = useState(false);
  const { data, loading, error } = useCustomAnalysisStratsQuery(includeDetails);

  const toggleQueryType = () => {
    setIncludeDetails(!includeDetails);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>Strategies Data</h2>
      <button onClick={toggleQueryType}>
        {includeDetails ? 'Hide Details' : 'Show Details'}
      </button>
      <ul>
        {data && data.data.map(({ id, name, details }) => (
            <li key={id}>
              <p>Name: {name}</p>
              {includeDetails && details && <p>Details: {details}</p>}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default StrategiesComponent;
