import { Heading, Card, CardBody, Divider, Tag, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { Product } from "types";

interface ProductCardProps {
  product: Product;
}

const FALLBACK_IMAGE = "https://via.placeholder.com/150";

export const ProductCard = ({ product }: ProductCardProps) => {
  const router = useRouter();
  const { name, type, slug, description, image } = product;

  return (
    <Card maxW='sm' onClick={() => router.push(`/products/${slug}`)}>
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
      </CardBody>
      <Divider />
    </Card>
  );
};
