import React from "react";
import Landing from "pages/landing";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ErrorProvider} from "common/components/Error/context/ErrorContext";

function App() {
  return (
    <ErrorProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </ErrorProvider>
  );
}

export default App;
