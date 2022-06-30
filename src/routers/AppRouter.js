import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => {
  return (
    
    <BrowserRouter>
       <Routes>
         {/* <Route path="/login" element={<loginScreen/>}/> */}
          <Route path="/login" element={
            <PublicRoutes>
              <LoginScreen/>
            </PublicRoutes>
            } />

          <Route path="/*" element={
            <PrivateRouter>
              <DashboardRoutes/>
            </PrivateRouter>
          }/>

          {/* <Route path="/*" element={<DashboardRoutes/>}/> */}

        </Routes>
      </BrowserRouter>
    
  );
};
