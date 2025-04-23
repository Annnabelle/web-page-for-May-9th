import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import NurataInner from "../pages/nurataInner";


const Home = lazy(() => import("../pages/home"));
const BiographyPage = lazy(() => import("../pages/biography"))
const NurataPage = lazy(() => import("../pages/nurataPage"))
const Vov = lazy(() => import('../pages/vov'))
const Gallery = lazy(() => import("../pages/gallery"))

const Router: React.FC = () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/biography' element={<BiographyPage/>}/>
        <Route path='/nurata' element={<NurataPage/>}/>
        <Route path='/nurata/:id' element={<NurataInner/>}/>
        <Route path='/vov' element={<Vov/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
      </Routes>
    </Suspense>
  );
};

export default Router;