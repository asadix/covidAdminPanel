import React from "react";

// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      {/* <HorizonLogo h='26px' w='175px' my='32px' color={logoColor} /> */}
      <img src={'https://yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2.jpg'} alt='Logo' style={{width:150,height:80}} />
      
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
