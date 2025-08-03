"use client";

import { useEffect, useState } from "react";
import { getAllProducts } from "@/api/services";
import { Card, ProductCard, ThemeButton } from "@/components";
import { homeCards, homeContent } from "@/constants";
import { FileWarning, Loader } from "lucide-react";

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

export default function Home() {
  const [products, setProducts] = useState<Array<Product> | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      try {
        const prods = await getAllProducts();
        setProducts(prods);
        setLoading(false);
      } catch (err) {
        console.error("Unexpected error: " + err);
        setProducts(null);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="home-page-container">
      <main>
        <section className="header-content-container">
          <h1>{homeContent.title}</h1>
          {homeContent.content?.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
          <ThemeButton>Get Started Today</ThemeButton>
        </section>
        <section className="products-container">
          {products ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : loading ? (
            <div className="loading">
              <Loader className="loader-icon" />
            </div>
          ) : (
            <div className="fetch-fail">
              <FileWarning className="error-icon" />
              <span>Failed to load products</span>
            </div>
          )}
        </section>
        <section className="header-content-container">
          <h1>Qualities</h1>
        </section>
        <section className="home-cards-container">
          {homeCards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              icon={card.icon}
              showLearnMore
            />
          ))}
        </section>
      </main>
    </div>
  );
}
