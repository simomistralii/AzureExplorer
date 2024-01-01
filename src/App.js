
import React, { Component } from "react";
import './App.css';
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import PowerBIReportEmbed from "./pages/PowerBIReport";

class App extends Component {
    render() {
        return (
            <div className="App select-none">
                <BrowserRouter basename=''>
                    <Routes>
                        <Route element={<Layout />} >
                            <Route path="/" element={<Home />} />
                            <Route path="/About" element={<About />} />
                            <Route path="/PowerBI/:reportID" element={<PowerBIReportEmbed />} />
                        </Route>
                    </Routes>
                   {/*  <Layout /> */}
                </BrowserRouter>
            </div>
        );
    }
}

export default App;