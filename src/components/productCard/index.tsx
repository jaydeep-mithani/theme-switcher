"use client";

import { useState } from "react";
import { Eye, Heart, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onToggleFavorite?: (product: Product) => void;
  onViewDetails?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onToggleFavorite,
  onViewDetails,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    onToggleFavorite?.(product);
  };

  const handleAddToCart = () => {
    onAddToCart?.(product);
  };

  const handleViewDetails = () => {
    onViewDetails?.(product);
  };

  // Render star rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(product.rating.rate);
    const hasHalfStar = product.rating.rate % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="product-card-star product-card-star-filled" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="product-card-star product-card-star-half" />
      );
    }

    const remainingStars = 5 - Math.ceil(product.rating.rate);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star
          key={`empty-${i}`}
          className="product-card-star product-card-star-empty"
        />
      );
    }

    return stars;
  };

  return (
    <div className={`product-card`}>
      {/* Image Container */}
      <div className="product-card-image-container">
        <Image
          src={product.image}
          alt={product.title}
          className={`product-card-image ${imageLoaded ? "loaded" : "loading"}`}
          onLoad={() => setImageLoaded(true)}
          width={1200}
          height={0}
        />

        {/* Overlay Actions */}
        <div className="product-card-overlay">
          <button
            className="product-card-action-btn product-card-favorite-btn"
            onClick={handleToggleFavorite}
            aria-label="Toggle favorite"
          >
            <Heart
              className={`product-card-heart ${isFavorite ? "favorited" : ""}`}
            />
          </button>
          <button
            className="product-card-action-btn product-card-view-btn"
            onClick={handleViewDetails}
            aria-label="View details"
          >
            <Eye className="product-card-eye" />
          </button>
        </div>

        {/* Category Badge */}
        <div className="product-card-category-badge">{product.category}</div>
      </div>

      {/* Content */}
      <div className="product-card-content">
        <h3 className="product-card-title" title={product.title}>
          {product.title}
        </h3>

        <p className="product-card-description">
          {product.description.length > 100
            ? `${product.description.substring(0, 100)}...`
            : product.description}
        </p>

        {/* Rating */}
        <div className="product-card-rating">
          <div className="product-card-stars">{renderStars()}</div>
          <span className="product-card-rating-text">
            {product.rating.rate} ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price and Actions */}
        <div className="product-card-footer">
          <div className="product-card-price">
            <span className="product-card-currency">$</span>
            <span className="product-card-amount">
              {product.price.toFixed(2)}
            </span>
          </div>

          <button
            className="product-card-cart-btn"
            onClick={handleAddToCart}
            aria-label="Add to cart"
          >
            <ShoppingCart className="product-card-cart-icon" />
            <span className="product-card-cart-text">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
