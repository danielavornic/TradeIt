import { useRouter } from "next/router";
import {
  Heading,
  Card,
  CardBody,
  Divider,
  Tag,
  Box,
  Text,
} from "@chakra-ui/react";

import { Product } from "types";

interface ProductCardProps {
  product: Product;
}

const FALLBACK_IMAGE = "https://via.placeholder.com/150";

export const ProductCard = ({ product }: ProductCardProps) => {
  const router = useRouter();
  const { name, type, slug, description, image } = product;

  return (
    <Card maxW='sm' onClick={() => router.push(`/products/${slug}`)} bg='white'>
      <CardBody>
        <Box
          bgImage={`url(${image || FALLBACK_IMAGE})`}
          bgPosition='center'
          bgRepeat='no-repeat'
          bgSize='cover'
          borderRadius='lg'
          height='200px'
        />
        <Heading size='md' mt='6' mb='4'>
          {name}
        </Heading>
        <Tag textTransform='uppercase'>{type}</Tag>
        <Text mt={2} fontSize='sm'>
          {description?.slice(0, 100)}
          {description?.length > 100 && "..."}
        </Text>
      </CardBody>
      <Divider />
    </Card>
  );
};
