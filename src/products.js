import React from "react";
import { Button, Box, Image, Badge } from "@chakra-ui/core";
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
      imageUrl:"https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80I",
      imageAlt: "Pool villa",
      beds: 4,
      baths: 5,
      title: "Villa Luigiano near beach",
      formattedPrice: "$1,100.00",
      reviewCount: 15,
      rating: 3,
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1565623833408-d77e39b88af6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
      imageAlt: "Penthouse view at night",
      beds: 3,
      baths: 2,
      title: "Beautiful penthouse",
      formattedPrice: "$2,000.00",
      reviewCount: 16,
      rating: 5,
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
    console.log("addproduct");
    product.id = products.length + 1;

    setProducts([...products, product]);
    console.log(products);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div style={divStyle}>
      <SimpleGrid columns={3} spacingX="40px" spacingY="320px">
        {products.length > 0 ? (
          products.map((product) => (
            <Box height="120px">
              <AirbnbExample product={product} deleteProduct={deleteProduct}></AirbnbExample>
            </Box>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No Products</td>
          </tr>
        )}

        <Box height="120px">
          <AddProductForm addProduct={addProduct} />
        </Box>
      </SimpleGrid>
    </div>
  );
}

// Sample card from Airbnb

function AirbnbExample(props){
  
  console.log(props.product);
  const property = props.product;

  /*const property = props.product;  */

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
      <Button className="button muted-button">Edit</Button>
      <Button
        onClick={() => props.deleteProduct(property.id)}
        className="button muted-button"
      >
        Delete
      </Button>
    </Box>
  );
  }

export default Products;
