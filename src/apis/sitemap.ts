import axios from 'axios';

export async function fetchSitemap() {
  const { data } = await axios.get('https://api.cocstorage.com/sitemap-mobile.xml', {
    headers: {
      'X-Api-Key': import.meta.env.VITE_X_API_KEY
    }
  });

  return data;
}
