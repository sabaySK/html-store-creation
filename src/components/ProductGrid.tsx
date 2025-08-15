
import React from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isOnSale?: boolean;
}

interface ProductGridProps {
  products: Product[];
  onAddToCart?: (product: Product) => void;
  onViewProduct?: (product: Product) => void;
}

const ProductGrid = ({ products, onAddToCart, onViewProduct }: ProductGridProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="store-heading mb-4">Featured Products</h2>
          <p className="store-subheading text-muted-foreground">
            Discover our handpicked selection of premium items
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard
                product={product}
                onAddToCart={onAddToCart}
                onViewProduct={onViewProduct}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
