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

const name = "New charge of clothing from different brands"
  export const Recomm1 = () => {

    return (
      <Card  maxW='sm' w = '90%' margin='auto'>
      <CardBody>
        <Image
          src='hoodie.png'
          alt='Orange hoodie'
          borderRadius='lg'
        />
        <Heading size='xs' mt='3' mb='1'>
          {name}
        </Heading>
      </CardBody>
      </Card>

      
        );
};