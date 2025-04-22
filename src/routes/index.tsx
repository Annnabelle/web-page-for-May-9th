import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";


const Home = lazy(() => import("../pages/home"));
const BiographyPage = lazy(() => import("../pages/biography"))

const Router: React.FC = () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/biography' element={<BiographyPage/>}/>
      </Routes>
    </Suspense>
  );
};

export default Router;