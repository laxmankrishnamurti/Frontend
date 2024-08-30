import React from "react";
import { useProduct } from "../../Context/ProductContext";

function ProductForm() {
  const { setProduct } = useProduct();

  function handleSubmit(e) {
    e.preventDefault();
    let newProduct = {
      _id: Date.now(),
      name: e.target[0].value,
      price: e.target[1].value,
      imageUrl: e.target[2].value,
    };

    //Adding new product
    setProduct((prev) => [...prev, newProduct]);

    //Resetting all products' input field
    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="name"
        placeholder="Product Name"
        className="border-2 border-red-400 block px-2 py-1 ml-4 my-2 rounded-md"
      />
      <input
        type="number"
        placeholder="Product Price"
        className="border-2 border-red-400 block px-2 py-1 ml-4 my-2 rounded-md"
      />
      <input
        type="text"
        placeholder="Product Image URL"
        className="border-2 border-red-400 block px-2 py-1 ml-4 my-2 rounded-md"
      />
      <button
        type="submit"
        className="bg-orange-400 px-4 py-2 ml-4 mb-4 rounded-md"
      >
        Add Product
      </button>
    </form>
  );
}

export default ProductForm;
