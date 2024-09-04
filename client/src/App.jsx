// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
// import Card from './components/Card'
import Test from './pages/Home/test'
import CompanyDashboard from './pages/Company_Dashboard/dashboard'
import Achivements from '../src/components/CompanyDashBoard/section2/achivement/Achivements'
import Form from './pages/ProjectForm/Form'
import ProjectDashboard from './pages/Project_Dashboard/dashboard'

function App() {
  return (
    <>
      <header>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="/com" element={<CompanyDashboard />} />
            <Route path="/achivements" element={<Achivements></Achivements>} />
            <Route path="/form" element={<Form/>} />
            <Route path="/project_dashboard" element={<ProjectDashboard/>}/>
          </Routes>
        </BrowserRouter>
      </header>
      <main></main>
    </>
  );
}

export default App;
