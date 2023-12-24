export default function getImageName(url?: string | null) {
  if (!url) return '';

  const splitUrl = url.split('/');

  return splitUrl[splitUrl.length - 1];
}
