
import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://srudentbackend-1.onrender.com/api/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data.products || []);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Products</h1>
      {products.map(p => (
        <div key={p._id}>
          <a href={`/products/${p._id}`}>
            {p.name} - ₹{p.price}
          </a>
        </div>
      ))}
    </div>
  );
}
