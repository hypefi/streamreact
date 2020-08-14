import React from "react";
import { Button, ButtonGroup} from "@chakra-ui/core";


function Chakra(){
  return (
    <div>
      <h2>Chakra ui</h2>
      <ButtonGroup spacing={4}>
        <Button leftIcon="email" variantColor="teal" variant="solid">
          Email
        </Button>
        <Button rightIcon="arrow-forward" variantColor="teal" variant="outline">
          Call us
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Chakra;
