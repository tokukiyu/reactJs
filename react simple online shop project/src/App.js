import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminHomePage from "./admin/AdminHomePage";
import AboutUs from "./components/aboutUs";
import Feedbacks from "./components/Feedbacks";
import { Featured, Kids, Men, Women } from "./components/filter";
import { Header, HomePage } from "./components/homePage";
import ShoppingList from "./components/product";
import ProductInfo from "./components/productInfo"; // Change this import statement

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ShoppingList />} />
        <Route exact path="/product/:id" element={<ProductInfo />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/admin" element={<AdminHomePage />}></Route>
        <Route path="/product/kids" element={<Kids />}></Route>
        <Route path="/product/Men" element={<Men />}></Route>
        <Route path="/product/women" element={<Women />}></Route>
        <Route path="/product/featured" element={<Featured />}></Route>
        <Route path="/give_feedback" element={<Feedbacks />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
