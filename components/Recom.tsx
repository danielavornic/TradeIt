import { Box, Image } from "@chakra-ui/react";
import { Card, CardBody, Heading } from "@chakra-ui/react";

const name = "New charge of clothing from different brands";
export const Recomm1 = () => {
  return (
    <Card maxW='sm' margin='auto'>
      <CardBody>
        <Box
          bgImage={`url('hoodie.png')`}
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
