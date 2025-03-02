import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../NvHome/Pages/HomePage';
import { BibliotecaPage } from '../NvBiblioteca/Pages/BibliotecaPage';
import { GitPage } from '../NvGit/Pages/GitPage';
import NvProgramasRouter from '../NvProgramas/NvProgramasRouter/NvProgramasRouter';
import ProgramaPage from '../NvProgramas/Pages/ProgramaPage';

const RouterApp = () => {
  return (
    <Routes>
      <Route path="inicio" element={<HomePage />} />
      <Route path="biblioteca" element={<BibliotecaPage />} />
      <Route path="github" element={<GitPage />} />
      <Route path="programas" element={<ProgramaPage />} />
      <Route path="nvprogramas/*" element={<NvProgramasRouter />} />
      <Route path="/" element={<Navigate to="/inicio" />} />
      <Route path="*" element={<Navigate to="/inicio" />} /> {/* Ruta para manejar rutas no encontradas */}
    </Routes>
  );
};

export default RouterApp;