import { Image } from "@chakra-ui/react";
import { Card, CardBody, Heading } from "@chakra-ui/react";

const name = "A book from John";
export const Recomm4 = () => {
  return (
    <Card maxW='sm' margin='auto' mt='5'>
      <CardBody>
        <Image src='book.jpg' alt='book' borderRadius='lg' />
        <Heading size='xs' mt='3' mb='1'>
          {name}
        </Heading>
      </CardBody>
    </Card>
  );
};
