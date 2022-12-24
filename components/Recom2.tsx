import {
    Box,
    Flex,
    Avatar,
    HStack,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    InputGroup,
    Input,
    InputRightElement,
    VStack,
    Select,
    Text,
    Container,
    Image,
  } from "@chakra-ui/react";
  import { Card, CardHeader, CardBody, Heading, Tag, CardFooter } from '@chakra-ui/react'

const name = "A practically new pair of headphones"
  export const Recomm3 = () => {

    return (
      <Card  maxW='sm' w = '90%' margin='auto' mt = "5">
      <CardBody>
        <Image
          src='headphone.png'
          alt='headphone'
          borderRadius='lg'
        />
        <Heading size='xs' mt='3' mb='1'>
          {name}
        </Heading>
      </CardBody>
      </Card>

      
        );
};