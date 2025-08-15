
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Heart, Eye } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isOnSale?: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onViewProduct?: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart, onViewProduct }: ProductCardProps) => {
  return (
    <div className="product-card group cursor-pointer">
      <div className="relative overflow-hidden">
        <div className="aspect-square bg-muted flex items-center justify-center">
          <span className="text-muted-foreground text-sm">{product.name}</span>
        </div>
        
        {product.isOnSale && (
          <div className="absolute top-3 left-3">
            <span className="sale-badge">SALE</span>
          </div>
        )}
        
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button variant="ghost" size="icon" className="bg-white/90 hover:bg-white">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex space-x-2">
            <Button 
              size="sm" 
              className="store-button-primary"
              onClick={() => onViewProduct?.(product)}
            >
              <Eye className="h-4 w-4 mr-2" />
              View
            </Button>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-2">
          <span className="category-badge text-xs">{product.category}</span>
        </div>
        <h3 className="product-title mb-2">{product.name}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="product-price">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => onAddToCart?.(product)}
            className="hover:bg-accent hover:text-accent-foreground"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
