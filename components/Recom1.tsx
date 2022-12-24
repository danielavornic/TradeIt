import { Box, Image } from "@chakra-ui/react";
import { Card, CardBody, Heading } from "@chakra-ui/react";

const name = "Always new products...";
export const Recomm2 = () => {
  return (
    <Card maxW='sm' margin='auto' mt='5'>
      <CardBody>
        <Box
          bgImage={`url('whatever.png')`}
          bgPosition='center'
          bgRepeat='no-repeat'
          bgSize='cover'
          borderRadius='lg'
          height='160px'
        />
        <Heading size='xs' mt='3' mb='1'>
          {name}
        </Heading>
      </CardBody>
    </Card>
  );
};
