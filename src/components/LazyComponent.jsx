import React, { Suspense } from "react";

function LazyComponent({ component }) {
  return <Suspense fallback={<div>Loading...</div>}>{component}</Suspense>;
}

export default LazyComponent;
