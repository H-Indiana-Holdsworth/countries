import { checkError, client } from './client';

export async function getCountries() {
  // call supabase and get the list of countries
  const response = await client.from('countries').select();
  return checkError(response);
}
