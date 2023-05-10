// import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./component/layouts/MainLayout";
import Home from "./component/pages/home/Home";
const App = () => {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );

  // <BrowserRouter>
  //   <Routes>
  //     <Routes>
  //       <Route path={AppRoutes.HOME} element={<HomeScreen />} />
  //       <Route path={AppRoutes.ANY} element={<HomeScreen />} />
  //     </Routes>
  //   </Routes>
  // </BrowserRouter>;
};
export default App;
