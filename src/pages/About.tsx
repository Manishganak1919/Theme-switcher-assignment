import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { themeClasses } from "@/constants/themeClasses";
import { useEffect, useState } from "react";

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

const ProductListing = () => {
  const currentTheme = useSelector(
    (state: RootState) => state.theme.currentTheme
  );
  const theme = themeClasses[currentTheme];
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div
        className={`min-h-screen ${theme.background} ${theme.text} ${theme.font} flex justify-center items-center`}
      >
        <div className="text-xl">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={`min-h-screen ${theme.background} ${theme.text} ${theme.font} flex justify-center items-center`}
      >
        <div className="text-xl text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen ${theme.background} ${theme.text} ${theme.font} py-8 px-4 sm:px-6 lg:px-8`}
    >
      <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className={`${theme.card} rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105`}
          >
            <div className="h-48 overflow-hidden flex items-center justify-center p-4">
              <img
                src={product.image}
                alt={product.title}
                className="object-contain h-full w-full"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2 line-clamp-2">
                {product.title}
              </h3>
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-lg">${product.price}</span>
                <span className="text-sm">
                  {product.rating.rate} ⭐ ({product.rating.count})
                </span>
              </div>
              <p className="text-sm mb-4 line-clamp-3">{product.description}</p>
              <button
                className={`${theme.button} text-white py-2 px-4 rounded w-full transition-colors`}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
