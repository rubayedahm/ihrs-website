// Images are served as-is (static export); this only prefixes the base path
// so the site also works from a sub-folder such as GitHub Pages.
export default function imageLoader({ src, width }: { src: string; width: number }) {
  if (/^https?:\/\//.test(src)) return src;
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}?w=${width}`;
}
