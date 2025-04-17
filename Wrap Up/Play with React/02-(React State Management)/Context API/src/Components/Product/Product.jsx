import React from "react";
import { useProduct } from "../../Context/ProductContext";

function Product() {
  const { product } = useProduct();
  return (
    <>
      <div className="ml-4 flex gap-4">
        {product.map((p) => (
          <div key={p._id} className="shadow shadow-black p-2">
            <div className="w-24">
              <img src={p.imageUrl} className="w-full" />
            </div>
            <div>
              <h1>{p.name}</h1>
            </div>
            <div>
              <h2>{p.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Product;
