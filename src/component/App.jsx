import { queryAllByPlaceholderText } from "@testing-library/react";
import React from "react";
import ReactDom from "react-dom";
import productdetail from "./product-detail.jsx"
import Product from "./product.jsx";

function CreateProduct(productdetail){
  return(
  <Product 
    name={productdetail.name}
    mg={productdetail.mg}
    quantity={productdetail.quantity}
    Original_mrp={productdetail.Original_mrp}
    price={productdetail.price}
    percentage_off={productdetail. percentage_off}
  />
  );
}

function App(){
  return(
    <div>
      {productdetail.map(CreateProduct)}
    </div>
  );
}

export default App;