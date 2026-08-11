// Must match `basePath` in next.config.ts. Plain <a>/<img> tags (unlike
// next/link and next/image) don't get basePath applied automatically, so
// any hardcoded link to a file in public/ needs to go through this helper.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string) {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}
