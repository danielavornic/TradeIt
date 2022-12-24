import { Center, Square, Circle, Box, Text, Badge, HStack, Image, Button, Stack } from '@chakra-ui/react'
import { Layout } from "../../components/Layout";
import React from "react";

const DoSwap = () => {
  // @ts-ignore
  return <Layout title={'Product'}>
    <HStack>
      <Box position="absolute" top="175" left="3" >
        <Text fontSize="ms">
          <b>Black Hoodie Tommy Hillfiger</b>
        </Text>
      </Box>

      <Box position="absolute" top="240" left="20">
        <Image src='https://cms.brnstc.de/product_images/435x596_retina/cpro/media/images/product/22/8/100131946918000_0_1660942894724.jpg'
               boxSize="220px" />
      </Box>
      <Badge position="absolute" top="520" left="3" right="6" borderRadius='md' w='350px' h="100px"
             colorScheme='white' border='1px' borderColor='gray.200' boxShadow='md'></Badge>
      <Badge position="absolute" top="630" left="3" right="6" borderRadius='md' w='350px' h="100px"
             colorScheme='white' border='1px' borderColor='gray.200' boxShadow='md'></Badge>
      <Box position="absolute" top="545" left="6" right="7" noOfLines={[1,2,3]}>
        <Text fontSize="xs" >
          This Tommy Hilfiger hodie is a classic black color. It's made of a soft fabric that's perfect for layering,
          with a bright white logo on the chest and signature red, white, and blue stripes around the sleeves. The hood
          has a drawstring to adjust the fit, and the zipper closure ensures a snug fit. The kangaroo pocket on the
          front is great for keeping your hands warm and your small items secure. It's a timeless piece that you'll wear
          for years to come.
        </Text>
      </Box>
      <Box position="absolute" top="635" left="6" right="6" >
        <Text fontSize="xs" >
          <b>Categories</b>
        </Text>
      </Box>
      <Stack spacing={2} direction='row' align='center' position="absolute" top="660" left="6" right="6">
        <Button colorScheme='teal' size='xs' borderRadius='full' variant="outline">
          Clothing
        </Button>
        <Button colorScheme='teal' size='xs' borderRadius='full' variant="outline">
          Hoodie
        </Button>
        <Button colorScheme='teal' size='xs' borderRadius='full' variant="outline">
          TommyHilfiger
        </Button>
        <Button colorScheme='teal' size='xs' borderRadius='full' variant="outline">
          Black
        </Button>
      </Stack>
      <Box position="absolute" top="525" left="6" right="6" >
        <Text fontSize="xs">
          <b>Description</b>
        </Text>
      </Box>
      <Stack direction='row'  align='center' position="absolute" top="210" left="0" >
        <Button colorScheme='gray' size="xs" variant='solid' borderRadius='md'>
          SWAP
        </Button>
      </Stack>
      <Box position="absolute" top="490" left="3" >
        <Text fontSize="ms">
          <b>Published on </b>1/23/22
        </Text>
      </Box>
      <Box position="absolute" top="470" left="3" >
        <Text fontSize="ms">
          <b>Created by </b>user4903
        </Text>
      </Box>
      <Button size='md' height='48px' width='350px' variant="solid" colorScheme='teal' top="600" left="3" >
        Swap IT!
      </Button>
    </HStack>
  </Layout>
};

export default DoSwap;
