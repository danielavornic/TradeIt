import { Box, Image } from "@chakra-ui/react";
import { Card, CardBody, Heading } from "@chakra-ui/react";

const name = "A practically new pair of headphones";
export const Recomm3 = () => {
  return (
    <Card maxW='sm' margin='auto' mt='5' bg='white'>
      <CardBody>
        <Box
          bgImage={`url('headphone.png')`}
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
