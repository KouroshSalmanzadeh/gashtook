import React, { ReactElement } from "react";

export default function NotFound(): ReactElement {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-2xl">Page not found</p>
    </div>
  );
}
