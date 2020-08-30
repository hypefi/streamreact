import React, { useEffect, useState } from "react";
import { Button, Box, Image, Badge } from "@chakra-ui/core";
import { SimpleGrid } from "@chakra-ui/core";
import AddProductForm from "./AddProductForm";
import EditProductForm from "./EditProductForm";
import { db } from './config.js';




const divStyle = {
  padding: "30px"
};

function Products() {
  //Data

  const [products, setProducts] = React.useState();

  useEffect(() => {
    db.ref().on(
      "value",
      function (snapshot) {
        const data = snapshot.val();
        console.log("data", data);
        const products = [];
        for (let id in data) {
          products.push(data[id]);
        }
        console.log("productlist", products);
        setProducts(products);
      },
      function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      }
    );
  }, []);

  

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
  const [currentProduct, setCurrentProduct] = React.useState(initialFormState);
  const [editing, setEditing] = useState(false);

  //crud ops
  const addProduct = (product) => {
    console.log("addproduct");
    product.id = products.length + 1;
    
    setProducts([...products, product]);
    // write products in firebase 
    db.ref(product.id).set({
      id: product.id,
      imageUrl: product.imageUrl,
      imageAlt: product.imageAlt,
      beds: product.beds,
      baths: product.baths,
      title: product.title,
      formattedPrice: product.formattedPrice,
      reviewCount: product.reviewCount,
      rating: product.rating,
    });

    console.log(products);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
    // delete product from firebase 
  };

  const updateProduct = (id, updatedProduct) => {
    setEditing(false);
    console.log("updated product: ");
    console.log(updatedProduct);
    console.log("up product id");
    console.log(updatedProduct.id);
    console.log("products");
    console.log(products);
    console.log("id" + id);
    console.log("current product", currentProduct);
    setProducts(
      products.map((product) => (product.id === id ? updatedProduct : product))
    );
    // update product in firebase 
  };

  const editRow = (product) => {
    setEditing(true);
    console.log(editing);
    console.log("product id", product.id);
    console.log("product", product);
    setCurrentProduct({
      id: product.id,
      imageUrl: product.imageUrl,
      imageAlt: product.imageAlt,
      beds: product.beds,
      baths: product.baths,
      title: product.title,
      formattedPrice: product.formattedPrice,
      reviewCount: product.reviewCount,
      rating: product.rating,
    });
  };

  return (
    <div style={divStyle}>
      <SimpleGrid columns={3} spacingX="40px" spacingY="320px">
       
        {products ? (
          products.map((product) => (
            <Box height="120px">
              <AirbnbExample
                product={product}
                editRow={editRow}
                deleteProduct={deleteProduct}
              ></AirbnbExample>
            </Box>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No Products</td>
          </tr>
        )}

        <Box height="120px">
          {editing ? (
            <EditProductForm
              setEditing={setEditing}
              currentProduct={currentProduct}
              updateProduct={updateProduct}
            />
          ) : (
            <AddProductForm addProduct={addProduct} />
          )}
        </Box>
      </SimpleGrid>
    </div>
  );
}

// Sample card from Airbnb

function AirbnbExample(props){
  
  //console.log(props.product);
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
      <Button
        onClick={() => {
          props.editRow(property);
        }}
        className="button muted-button"
      >
        Edit
      </Button>
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
