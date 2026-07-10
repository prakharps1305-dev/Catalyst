// lucide-react 1.21.0 ships without usable TypeScript declarations, which breaks
// `next build` / tsc. This ambient shim lets the icons import cleanly.
// If you upgrade lucide-react to a modern 0.x release (which bundles its own
// types), you can delete this file.
declare module "lucide-react";
