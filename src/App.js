import { useState, useEffect } from 'react';
import './App.css';
import { getCountries } from './services/countries';

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');
  const [continent, setContinent] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      setCountries(data);
    };
    fetchData();
  }, []);

  function filterCountries() {
    return countries.filter((c) => {
      return c.name.includes(query) && (c.continent === continent || continent === 'All');
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
      <select value={continent} onChange={(elem) => setContinent(elem.target.value)}>
        <option value="All">All</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Asia">Asia</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Oceania">Oceania</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
      </select>
      {filterCountries().map((country) => (
        <p key={country.id}>
          {country.name} {country.continent}
          <img src={`https://flagcdn.com/16x12/${country.iso2.toLowerCase()}.png`} />
        </p>
      ))}
    </div>
  );
}

export default App;
