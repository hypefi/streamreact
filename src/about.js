import React , { useEffect , useState } from "react";
import { db } from "./config.js";

const About = () => {
  
  const [productlist, setproductlist] = useState();

  useEffect(() =>  { 
    
    db.ref().on(
    'value',
    function (snapshot) {
     
      const data = snapshot.val();
      console.log("data", data);
      const productlist = [];
      for (let id in data){
      productlist.push(data[id]);
      }
      console.log("productlist", productlist);
      setproductlist(productlist);
    },
    function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    }
    )}, []);


  return (
    <div>
      <p>
       
       <span>productsData: {productlist ? productlist.map((product)=> <h1>{product.baths}</h1>):""}</span>
      </p>
    </div>
  );
};

export default About;
