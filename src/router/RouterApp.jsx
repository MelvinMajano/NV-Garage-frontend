import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../NvHome/Pages/HomePage';
import ProgramaPage from '../NvProgramas/Pages/ProgramaPage';
import NvProgramasRouter from '../NvProgramas/NvProgramasRouter/NvProgramasRouter';
import BlogPage from '../Blog/BlogPage';
import NVLearnPage from '../NVLearn/NVLearnPage';
import BibliotecaVirtual from '../NvBiblioteca/Pages/BibliotecaVirtual';
import Navbar from '../Navbar/Navbar';

const RouterApp = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inicio" element={<HomePage />} />
        <Route path="/programas" element={<ProgramaPage />} />
        <Route path="/nvprogramas/*" element={<NvProgramasRouter />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/nvlearn" element={<NVLearnPage />} />
        <Route path="/biblioteca" element={<BibliotecaVirtual />} />
        <Route path="/comunidad" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default RouterApp;