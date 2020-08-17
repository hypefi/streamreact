import React from "react";
import { Box, Image, Badge } from "@chakra-ui/core";
import { SimpleGrid } from "@chakra-ui/core";
import AddProductForm from "./AddProductForm";


const divStyle = {
  padding: "30px"
};

 

function Products() {

  //Data
  const productsData = [
    {
      id: 1,
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Modern home in city center in the heart of historic Los Angeles",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      id: 2,
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Modern home in city center in the heart of historic Los Angeles",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
    {
      id: 3,
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Modern home in city center in the heart of historic Los Angeles",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    },
  ];

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

//setting state
  const [products, setProducts] = React.useState(productsData);
  const [currentProduct, setCurrentProduct] = React.useState(initialFormState);

  const addProduct = (product) => {
    product.id = products.length + 1;
    setProducts([...products, product]);
  };
  return (
    <div style={divStyle}>
      <SimpleGrid columns={3} spacingX="40px" spacingY="320px">
        <Box height="120px">
          <AirbnbExample></AirbnbExample>
        </Box>
       
        <Box height="120px">
          <AddProductForm addProduct={addProduct} />
        </Box>
      </SimpleGrid>
    </div>
  );
}

// Sample card from Airbnb

function AirbnbExample() {
  

  

  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  }

   

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.beds} beds &bull; {property.baths} baths
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>

        <Box d="flex" mt="2" alignItems="center">
           

           <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Products;
