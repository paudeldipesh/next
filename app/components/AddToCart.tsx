"use client";

export default function AddToCart() {
  return (
    <button
      className="btn btn-outline btn-warning"
      onClick={() => console.log("Product Added!")}
    >
      Add To Cart
    </button>
  );
}
