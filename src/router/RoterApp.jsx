import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../NvHome/Pages/HomePage"
import { BibliotecaPage } from "../NvBiblioteca/Pages/BibliotecaPage"
import { GitPage } from "../NvGit/Pages/GitPage"
import { ProgramaPage } from "../NvProgramas/Pages/ProgramaPage"



export const RouterApp =()=>{
    return(
        <Routes>
            <Route path="inicio" element={<HomePage/>}/>
            <Route path="biblioteca" element={<BibliotecaPage/>}/>
            <Route path="github" element={<GitPage/>}/>
            <Route path="programas" element={<ProgramaPage/>}/>
            <Route path="/" element={<Navigate to="/inicio"/>}/>
        </Routes>
    )
}