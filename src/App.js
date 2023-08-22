
import { Route, Routes } from "react-router-dom";
import Admin from "./Layout/Admin";
import About from "./Layout/About";
import Member from "./Layout/Member";
import Contact from "./Contact/Contact";
import CreateUser from "./Create/CreateUser";
import ListProduct from "./ListProduct/ListProduct";
import CreateProduct from "./ListProduct/CreateProduct/CreateProduct";
import Chart from "./Chart/Chart";
import DetailProduct from "./ListProduct/DetailProduct";
import CreateP from "./ListProduct/CreateP";
import UpdateProduct from "./ListProduct/UpdateProduct";
import Test from "./ListProduct/CreateProduct/Test";


function App() {
  return (
    <Routes>
      <Route path="/admin" element={<Admin />} />
      <Route path="/about" element={<About />} />
      <Route path="/memeber" element={<Member />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/create" element={<CreateUser />} />
      <Route path="/" element={<ListProduct />} />
      <Route path='/createProduct' element={<CreateProduct />} />
      <Route path='/chart' element={<Chart />} />
      <Route path='detailProduct/:encode' element={<DetailProduct />} />
      <Route path='/update/:encode' element={<UpdateProduct />} />
      <Route path='/test' element={<Test />} />
    </Routes>
  );
}

export default App;
