import { useState, useEffect } from 'react';
import './App.css';
import { getCountries } from './services/countries';

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');
  const [continent, setContinent] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timeout;

    const fetchData = async () => {
      const data = await getCountries();
      setCountries(data);
      timeout = setTimeout(() => {
        setLoading(false);
      }, 1800);
    };
    if (loading) {
      fetchData();
    }
    return () => {
      clearInterval(timeout);
    };
  }, [loading]);

  function filterCountries() {
    return countries.filter((c) => {
      return (
        c.name.toLowerCase().includes(query) && (c.continent === continent || continent === 'All')
      );
    });
  }

  return (
    <div className="App">
      <h1>Countries of the World</h1>
      {loading && <span className="loader"></span>}
      {!loading && (
        <>
          <input
            autoCapitalize="true"
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
        </>
      )}
    </div>
  );
}

export default App;
