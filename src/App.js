import { useState, useEffect } from 'react';
import './App.css';
import { getCountries } from './services/countries';

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      setCountries(data);
    };
    fetchData();
  }, []);

  function filterCountries() {
    return countries.filter((c) => {
      return c.continent.includes(query);
    });
  }

  return (
    <div className="App">
      <h1>Countries of the World</h1>
      <input
        placeholder="Search Countries"
        type="text"
        value={query}
        onChange={(elem) => {
          setQuery(elem.target.value);
        }}
      />
      <div className="Country">
        {countries.map((country) => (
          <p key={country.id}>
            {country.name}
            <img src={`https://flagcdn.com/16x12/${country.iso2.toLowerCase()}.png`} />
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
