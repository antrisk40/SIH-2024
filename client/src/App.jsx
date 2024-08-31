// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
// import Card from './components/Card'
import Test from './pages/Home/test'
import CompanyDashboard from './pages/Company_Dashboard/dashboard'

function App() {
  return (
    <>
      <header>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path = "/com" element = {<CompanyDashboard/>}/>
          </Routes>
        </BrowserRouter>
      </header>
      <main></main>
    </>
  );
}

export default App;
