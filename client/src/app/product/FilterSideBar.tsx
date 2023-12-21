export const fetchProductsByPrice = async (minPrice: number, maxPrice: number) => {
    const response = await fetch(`/api/products/filterByPrice/${minPrice}/${maxPrice}`);
    if (!response.ok) {
      throw new Error('Error fetching products by price');
    }
    return response.json();
  };