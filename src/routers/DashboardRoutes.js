import React from 'react';
import { Routes, Route } from "react-router-dom";

import { Navbar } from "../components/ui/NavBar";           

import { DCScreen } from "../components/dc/DcScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { HeroScreen } from "../components/heroes/HeroScreen";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        
      <Routes>
        <Route path="marvel" element={<MarvelScreen />} />
        <Route path="dc" element={<DCScreen />} />

        <Route path="search" element={<SearchScreen />} />
        <Route path="hero/:heroId" element={<HeroScreen/>}/>
        <Route path="/" element={<MarvelScreen />} />

      </Routes>
      </div>
    </>
  );
};
