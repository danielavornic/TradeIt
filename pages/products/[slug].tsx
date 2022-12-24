import {
  Box,
  Text,
  HStack,
  Image,
  Button,
  Tag,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import React from "react";
import { products } from "api";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { PageTitle, Layout } from "components";

const DoSwap = () => {
  const router = useRouter();
  const slug = router.query.slug;

  const { data } = useQuery("product", () =>
    products.getBySlug(slug as string)
  );

  const { name, description, image, category, type, createdAt } = data || {
    name: "",
    description: "",
    image: "",
    category: "",
    type: "",
    createdAt: "",
  };

  return (
    <Layout title={"Product"}>
      <Flex align='center' mb={4} alignItems='center'>
        <ArrowBackIcon onClick={() => window.history.back()} />
        <Text size='xs' ml={4}>
          Back to products
        </Text>
      </Flex>
      <PageTitle>
        <Flex align='center'></Flex>
        {name}
      </PageTitle>
      <HStack spacing={2} mb={4}>
        <Tag fontWeight='bold' textTransform='uppercase'>
          {type}
        </Tag>
        <Tag fontWeight='bold' variant='outline'>
          {category}
        </Tag>
      </HStack>
      <VStack align='left'>
        <Image src={image} alt={name} />
        <Text mb={-2}>
          <b>Published on </b>
          {new Date(createdAt).toLocaleDateString()}
        </Text>
        <Text>
          <b>Created by </b>Daniela Vornic
        </Text>
        <Box>
          <Text>
            <b>Description</b>
          </Text>
          <Text>{description}</Text>
        </Box>
        <Button
          size='md'
          height='48px'
          width='350px'
          variant='solid'
          colorScheme='teal'
          rounded='full'
        >
          Swap IT!
        </Button>
      </VStack>
    </Layout>
  );
};

export default DoSwap;
