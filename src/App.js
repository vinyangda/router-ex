import { Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./page/HomePage";
import AboutPage from "./page/AboutPage";
import ProductPage from "./page/ProductPage";
import ProductDetailPage from "./page/ProductDetailPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="products/:id" element={<ProductDetailPage />} />
      </Routes>
    </div>
  );
}

//RESTful Routes는 다음과 같다

//HTTP Verb (HTTP명령어)를 사용하며

//get : 데이터 가져오기
//post : 데이터 생산
//put : 데이터 수정
//delete : 데이터 삭제

export default App;
