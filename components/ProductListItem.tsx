import { useState } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Product } from "types";

export const ProductListItem = ({
  product,
  onSelect,
}: {
  product: Product;
  onSelect: (products: any[]) => void;
}) => {
  const { name, description, image } = product;
  const [bg, setBg] = useState("white");

  return (
    <Box
      p={4}
      shadow='sm'
      borderWidth='1px'
      onClick={() => {
        onSelect([product]);
        setBg(bg === "white" ? "gray.100" : "white");
      }}
      bg={bg}
      rounded='md'
    >
      <Flex align='center' alignItems='center'>
        <Box
          w='80px'
          h='80px'
          bgImage={`url(${image})`}
          bgPosition='center'
          bgRepeat='no-repeat'
          bgSize='cover'
          borderRadius='lg'
        />
        <Box ml={4}>
          <Heading as='h4' size='md'>
            {name}
          </Heading>
          <Text mt={2} fontSize='sm'>
            {description.slice(0, 100)}
            {description.length > 100 && "..."}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
