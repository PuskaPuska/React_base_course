import { BrowserRouter, Routes } from "react-router-dom"
import CarDetail from "./screens/car-detail/CarDetail"

const Router = () => {
  return <BrowserRouter>
  <Routes>
    <Route element={<Home />} path='/' />
    <Route element={<CarDetail />} path='/car/: id' />

    <Route path='*' element={<div> Not found </div>}  />
  </Routes>
  </BrowserRouter>
}

export default Router