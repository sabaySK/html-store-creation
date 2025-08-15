
import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import Categories from '@/components/Categories';
import Footer from '@/components/Footer';
import { toast } from 'sonner';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isOnSale?: boolean;
}

const Index = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // Sample products data
  const products: Product[] = [
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      price: 29.99,
      originalPrice: 39.99,
      image: "/api/placeholder/300/300",
      category: "Clothing",
      isOnSale: true,
    },
    {
      id: 2,
      name: "Leather Crossbody Bag",
      price: 89.99,
      image: "/api/placeholder/300/300",
      category: "Bags",
    },
    {
      id: 3,
      name: "Classic Denim Jacket",
      price: 79.99,
      originalPrice: 99.99,
      image: "/api/placeholder/300/300",
      category: "Clothing",
      isOnSale: true,
    },
    {
      id: 4,
      name: "Minimalist Watch",
      price: 199.99,
      image: "/api/placeholder/300/300",
      category: "Accessories",
    },
    {
      id: 5,
      name: "Casual Sneakers",
      price: 119.99,
      image: "/api/placeholder/300/300",
      category: "Shoes",
    },
    {
      id: 6,
      name: "Silk Scarf",
      price: 49.99,
      image: "/api/placeholder/300/300",
      category: "Accessories",
    },
    {
      id: 7,
      name: "Wool Sweater",
      price: 69.99,
      originalPrice: 89.99,
      image: "/api/placeholder/300/300",
      category: "Clothing",
      isOnSale: true,
    },
    {
      id: 8,
      name: "Canvas Backpack",
      price: 59.99,
      image: "/api/placeholder/300/300",
      category: "Bags",
    },
  ];

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => [...prev, product]);
    toast.success(`${product.name} added to cart!`, {
      description: `Price: $${product.price}`,
    });
  };

  const handleViewProduct = (product: Product) => {
    toast.info(`Viewing ${product.name}`, {
      description: "Product details would open here",
    });
  };

  const handleCartClick = () => {
    if (cartItems.length === 0) {
      toast.info("Your cart is empty", {
        description: "Add some products to get started!",
      });
    } else {
      toast.success(`Cart has ${cartItems.length} items`, {
        description: "Cart functionality would open here",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartItemsCount={cartItems.length} 
        onCartClick={handleCartClick}
      />
      <Hero />
      <Categories />
      <ProductGrid 
        products={products}
        onAddToCart={handleAddToCart}
        onViewProduct={handleViewProduct}
      />
      <Footer />
    </div>
  );
};

export default Index;
