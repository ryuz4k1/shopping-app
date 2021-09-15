import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import Masonry from 'react-masonry-css'
import ProductCard from '../components/ProductCard';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/products')
      .then(res => res.json())
      .then(data => setProducts(data.sort((a, b) => a.id < b.id ? 1:-1)))
  }, [])

  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/products/' + id, {
      method: 'DELETE'
    })
    const newProducts = products.filter(note => note.id !== id)
    setProducts(newProducts)
  }

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {products.map(product => (
          <div key={product.id}>
            <ProductCard product={product} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  )
}
