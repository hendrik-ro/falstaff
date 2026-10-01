import { Suspense, lazy } from "react";
import type { PageLoader } from "../types/content";

/**
 * Wraps a lazily imported page component in a Suspense boundary so that each
 * chapter is code-split by Vite.
 */
export default function lazyPage(loader: PageLoader) {
  const LazyComponent = lazy(loader);
  return (
    <Suspense fallback={<p>Loading…</p>}>
      <LazyComponent />
    </Suspense>
  );
}
