import { Heading, Card, Image, CardBody, Divider, Tag } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { Product } from "types";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const router = useRouter();
  const { name, type, slug, description, image, userId } = product;

  return (
    <Card maxW='sm' onClick={() => router.push(`/products/${slug}`)}>
      <CardBody>
        <Image
          src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='Green double couch with wooden legs'
          borderRadius='lg'
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
