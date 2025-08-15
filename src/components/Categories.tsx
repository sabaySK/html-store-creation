
import React from 'react';

interface Category {
  id: number;
  name: string;
  productCount: number;
  image: string;
}

const Categories = () => {
  const categories: Category[] = [
    { id: 1, name: 'Clothing', productCount: 125, image: '/api/placeholder/300/200' },
    { id: 2, name: 'Shoes', productCount: 89, image: '/api/placeholder/300/200' },
    { id: 3, name: 'Accessories', productCount: 67, image: '/api/placeholder/300/200' },
    { id: 4, name: 'Bags', productCount: 43, image: '/api/placeholder/300/200' },
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="store-heading mb-4">Shop by Category</h2>
          <p className="store-subheading text-muted-foreground">
            Find exactly what you're looking for
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="product-card text-center">
                <div className="aspect-square bg-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-accent">{category.name[0]}</span>
                </div>
                <h3 className="product-title mb-2">{category.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {category.productCount} products
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
