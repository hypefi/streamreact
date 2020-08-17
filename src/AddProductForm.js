import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/core";


const AddProductForm = (props) => {
  const initialFormState = {
    id: null,
    imageUrl: "",
    imageAlt: "",
    beds: "",
    baths: "",
    title: "",
    formattedPrice: "",
    reviewCount: "",
    rating: "",
  };

  const [product, setProduct] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <FormControl
      onSubmit={(event) => {
        event.preventDefault();
        if (
          !product.imageUrl ||
          !product.imageAlt ||
          !product.beds ||
          !product.baths ||
          !product.title ||
          !product.formattedPrice ||
          !product.reviewCount ||
          !product.rating
        )
          return props.addProduct(product)
          setProduct(initialFormState)
      }}
    >
      <FormLabel>imageUrl</FormLabel>
      <Input
        type="text"
        name="imageUrl"
        value={product.imageUrl}
        onChange={handleInputChange}
      />
      <FormLabel>imageAlt</FormLabel>
      <Input
        type="text"
        name="imageAlt"
        value={product.imageAlt}
        onChange={handleInputChange}
      />
      <FormLabel>beds</FormLabel>
      <Input
        type="text"
        name="beds"
        value={product.beds}
        onChange={handleInputChange}
      />
      <FormLabel>baths</FormLabel>
      <Input
        type="text"
        name="baths"
        value={product.baths}
        onChange={handleInputChange}
      />
      <FormLabel>title</FormLabel>
      <Input
        type="text"
        name="title"
        value={product.title}
        onChange={handleInputChange}
      />
      <FormLabel>formattedPrice</FormLabel>
      <Input
        type="text"
        name="formattedPrice"
        value={product.formattedPrice}
        onChange={handleInputChange}
      />
      <FormLabel>reviewCount</FormLabel>
      <Input
        type="text"
        name="reviewCount"
        value={product.reviewCount}
        onChange={handleInputChange}
      />
      <FormLabel>rating</FormLabel>
      <Input
        type="text"
        name="rating"
        value={product.rating}
        onChange={handleInputChange}
      />

      <Button>Add new product</Button>
    </FormControl>
  );
};

export default AddProductForm;

