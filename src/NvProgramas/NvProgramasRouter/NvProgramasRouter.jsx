import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProgramaPage from '../Pages/ProgramaPage';
import ProgramaDetailPage from '../Pages/ProgramaDetailPage/ProgramaDetailPage';

const NvProgramasRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ProgramaPage />} />
      <Route path="/:nodeId" element={<ProgramaDetailPage />} />
    </Routes>
  );
};

export default NvProgramasRouter;