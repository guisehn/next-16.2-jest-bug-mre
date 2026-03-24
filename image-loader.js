// Copied from https://nextjs.org/docs/app/api-reference/config/next-config-js/images#fastly
// Docs: https://developer.fastly.com/reference/io/
export default function fastlyLoader({ src, width, quality }) {
  const url = new URL(`https://example.com${src}`);
  url.searchParams.set("auto", "webp");
  url.searchParams.set("width", width.toString());
  url.searchParams.set("quality", (quality || 75).toString());
  return url.href;
}
