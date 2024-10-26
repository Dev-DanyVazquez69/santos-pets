// src/app/error/page.tsx

"use client";

import React from "react";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ error, reset }) => {
  return (
    <div>
      <h1>Ocorreu um erro</h1>
      <p>{error.message}</p>
      <button onClick={reset}>Tentar novamente</button>
    </div>
  );
};

export default ErrorPage;
