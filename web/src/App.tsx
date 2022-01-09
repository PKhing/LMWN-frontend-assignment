import React from "react";
import "./App.css";
import Landing from "pages/landing";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ErrorProvider} from "common/components/Error/context/ErrorContext";

function App() {
  return (
    <div className="App">
      <ErrorProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </ErrorProvider>
    </div>
  );
}

export default App;
