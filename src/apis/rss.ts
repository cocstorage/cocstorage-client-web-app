import axios from 'axios';

export async function fetchRSS() {
  const { data } = await axios.get('https://api.cocstorage.com/rss/mobile', {
    headers: {
      'X-Api-Key': import.meta.env.VITE_X_API_KEY
    }
  });

  return data;
}
