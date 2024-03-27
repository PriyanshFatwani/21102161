import React from "react";

const Filters = ({ onFilterChange }) => {
  const handleCategoryChange = (event) => {
    onFilterChange("category", event.target.value);
  };


