import React, { useState } from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/core";

const EditProductForm = (props) => {
  
const initialformState = {
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


  const [product, setProduct] = useState(initialformState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setProduct({ ...product, [name]: value });
  };

  return (
    <form>
      <FormControl>
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
        <Button
          onClick={(event) => {
            event.preventDefault();
            props.updateProduct(props.currentProduct.id, product);
          }}
        >
          Update
        </Button>
        <Button
          onClick={() => props.setEditing(false)}
          className="button muted-button"
        >
          Cancel
        </Button>
      </FormControl>
    </form>
  );
};

export default EditProductForm;
