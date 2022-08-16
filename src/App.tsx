import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import Home from "src/pages/Home";

const ErrorFallback = () => {
  return <div>Error</div>;
};

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
