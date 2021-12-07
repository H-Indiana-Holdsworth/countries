# Country Plan

## Goal

- Query the provided data using the Supabase JS client
- Use the `useEffect` hook to display the data

## Tasks

- Use the Supabase client to get the list of countries
  - Have a `getCountries` function to make a call to supabase and `.select` all the countries
- Use the `useEffect` hook to call the service layer and load the the countries when the component renders

  - call the `getCountries` fxn and `setCountries` equal to its response
  - `.map` the countries and display the countries WITH their flags
    - use the https://flagpedia.net/download/api API to load each country's flag

- Add a filter by continent feature
  - `.filter` countries by continent
  - add a `select` drop down menu
- Add a search by name feature
  - do something with `query` and
