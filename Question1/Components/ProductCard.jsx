import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{product.name}</Typography>
        <Typography variant="subtitle1">
          {product.company} - {product.category}
        </Typography>
        <Typography variant="body2">
          Price: ${product.price} (
          {product.discount}% discount)
        </Typography>
        <Typography variant="body2">Rating: {product.rating}</Typography>
        <Typography variant="body2">
          Availability: {product.availability ? "In Stock" : "Out of Stock"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
