import {
  Box,
  Text,
  HStack,
  Image,
  Button,
  Tag,
  VStack,
  Flex,
  useToast,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import React from "react";
import { mySwaps, products } from "api";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { PageTitle, Layout } from "components";

const DoSwap = () => {
  const router = useRouter();
  const slug = router.query.slug;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data: swaps } = useQuery("swaps", mySwaps.getList);
  const { data } = useQuery("product", () =>
    products.getBySlug(slug as string)
  );
  const isInMySwaps = swaps?.find((swap) => swap?.targetProduct === slug);

  const { name, description, image, category, type, createdAt, userId } =
    data || {
      name: "",
      description: "",
      image: "",
      category: "",
      type: "",
      createdAt: "",
    };

  return (
    <>
      <Layout title={`${name} - TradeIt`} description={description}>
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
          {userId === "1" ? (
            <HStack justifyContent='stretch' w='100%'>
              <Button size='md' width='full' rounded='full'>
                Edit
              </Button>
              <Button
                size='md'
                width='full'
                variant='outline'
                colorScheme='teal'
                rounded='full'
              >
                View Requests
              </Button>
            </HStack>
          ) : (
            <Button
              size='md'
              height='48px'
              width='350px'
              variant={isInMySwaps ? "outline" : "solid"}
              colorScheme='teal'
              rounded='full'
              onClick={onOpen}
            >
              {isInMySwaps ? "Cancel Swap" : "Swap IT!"}
            </Button>
          )}
        </VStack>
      </Layout>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size='sm'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Continue Swap Request</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              You are about to send a swap request for the product <b>{name}</b>
              . Please choose at most 3 products you want to swap with.
            </Text>
          </ModalBody>

          <ModalFooter justifyContent='center'>
            <Button variant='ghost' onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme='teal'
              mr={3}
              onClick={() => {
                router.push(`/my-products?swapProduct=${slug}`);
              }}
            >
              Choose Products
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DoSwap;
