import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent, // Import SelectChangeEvent from @mui/material
} from "@mui/material";

interface CategoryData {
  _id: string;
  category: number; // Assuming the category is a number
  photo?: string;
}

interface MultipleOptions {
  id: number;
  name: string;
}

const CategoryType: MultipleOptions[] = [
  { id: 0, name: "Bridal Hand" },
  { id: 1, name: "Bridal Leg" },
  { id: 2, name: "Modern Mehndi" },
  { id: 3, name: "Arabic Mehndi" },
  { id: 4, name: "Marwari Mehndi" },
  { id: 5, name: "Mehndi Tattoo" },
];

const CategoryPhotos = () => {
  const [categoryData, setCategoryData] = useState<CategoryData[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | string>("");

  console.log(categoryData, "categoryData");

  const fetchCategoryData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/v1/auth/uploads");
      setCategoryData(res.data.customerList);
    } catch (error) {
      console.error("Failed to fetch categories", error);
    }
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);

  const handleCategoryChange = (event: SelectChangeEvent<string | number>) => {
    setSelectedCategory(event.target.value);
  };

  const renderCategoryData = (categoryId: number) => {
    const filteredData = categoryData.filter(
      (data) => data.category === categoryId
    );
    const categoryName = CategoryType.find(
      (cat) => cat.id === categoryId
    )?.name;

    return (
      <Box sx={{ mt: 2 }} key={categoryId}>
        <Typography variant="h6">{categoryName}</Typography>
        {filteredData.length > 0 ? (
          filteredData.map((data) => (
            <Box key={data._id} sx={{ mb: 2 }}>
              <Typography variant="body2">ID: {data._id}</Typography>
              <Box
                component="img"
                src={`http://localhost:8080/api/v1/auth/upload/photo/${data._id}`}
                style={{ maxWidth: "100px", maxHeight: "100px" }}
                alt={`${categoryName}`}
              />
            </Box>
          ))
        ) : (
          <Typography variant="body2">No images found</Typography>
        )}
      </Box>
    );
  };

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel>Select Category</InputLabel>
        <Select
          value={selectedCategory}
          onChange={handleCategoryChange}
          label="Select Category"
        >
          {CategoryType.map((cat) => (
            <MenuItem key={cat.id} value={cat.id}>
              {cat.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {typeof selectedCategory === "number" &&
        renderCategoryData(selectedCategory)}
    </Box>
  );
};

export default CategoryPhotos;
