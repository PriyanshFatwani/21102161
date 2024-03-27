const products = [
  // Sample product data with unique IDs
  {
    id: 1,
    name: "Product 1",
    company: "Company 1",
    category: "Electronics",
    price: 100,
    rating: 4.5,
    discount: 10,
    availability: true,
  },
  // ... more products
];

export const fetchProducts = async (category, company) => {
  // Simulate API call with delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return products.filter(
    (product) =>
      (!category || product.category === category) &&
      (!company || product.company === company)
  );
};
