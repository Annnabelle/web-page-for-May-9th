import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";


const Home = lazy(() => import("../pages/home"));

const Router: React.FC = () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Suspense>
  );
};

export default Router;