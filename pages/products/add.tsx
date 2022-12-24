import { Layout} from "components";
import { Input,
         Box,
         VStack,
         InputGroup,
         InputRightAddon,
         Text, 
         Container, Heading, Button,
         Stack, Checkbox, Flex,
         Spacer, HStack, Select,
         Textarea, Radio, RadioGroup
        } from '@chakra-ui/react'
import { useMutation } from "react-query";

import { products } from "api";
import { createSlug } from "utils";
  

const AddProduct = () => {
  const [value, setValue] = React.useState('0');
  const { mutate } = useMutation(products.add);
  
  return(
    <>
    <Layout title='TradeIt - Add product'>
      <Box px={2} pb={5} >
        <VStack w='full' spacing={2}>
        <Box  w="full" borderColor={"gray.200"}  px={2} pb={4} pt={4} rounded='10px'>
          <Text align='left' position='relative' w='full' pb={2} color={'teal.500'} fontSize='sm'>
             NAME
            </Text>
          <Box justifyContent='left' display='flex' w='full'>
          <Input placeholder='Type a name to your product..' size='md'  w='full'  rounded='10px' />

            </Box> 
            </Box>
          <Box  w="full"   px={2} pb={5} rounded='10px'>
          <Text align='left' position='relative' w='full' pb={2} color={'teal.500'} fontSize='sm'>
             IMAGE
            </Text>
          <Input id="files"
              textAlign={"left"}
              // placeholder="Choose file"
              // size="md"
              type="file" border={"1px solid black"} placeholder={"Upload"}
            />
            </Box>
            <Box  w="full" borderColor={"gray.200"}  px={2} pb={4} rounded='10px'>
          <Text align='left' position='relative' w='full' color={'teal.500'} fontSize='sm' pb={2}>
             TYPE
            </Text>
          <Box justifyContent='left' display='flex' w='full'>
            

            <HStack direction='row' w='full'>
            <RadioGroup onChange={setValue} value={value}>
      <Stack direction='row'>
        <Radio value='1'>Swap</Radio>
        <Radio value='2'>Give Away</Radio>
      </Stack>
    </RadioGroup>
                {/* <Box p='2' w='auto' justifyContent='left' display='flex' >
                  <center>
                  <Checkbox>Swap</Checkbox>
                  </center>
        
                </Box>
        
                <Box p='2' w='auto' justifyContent='left' display='flex'>
                  <Checkbox>Give Away</Checkbox>
                </Box> */}

                </HStack>
            </Box>  
            </Box>
            
            <Box  w="full" borderColor={"gray.200"}  px={2} pb={4} rounded='10px'>
          <Text align='left' position='relative' w='full' pb={2} color={'teal.500'} fontSize='sm'>
             DESCRIPTION
            </Text>
          <Box justifyContent='left' display='flex' w='full'>
          <Textarea placeholder='Type a description...' rounded='10px' />
            </Box>  
            </Box>

            <Box  w="full" borderColor={"gray.200"}  px={2} pb={4} rounded='10px'>
          <Text align='left' position='relative' w='full' pb={2} color={'teal.500'} fontSize='sm'>
             CATEGORIES
            </Text>
          <Box justifyContent='left' display='flex' w='full'>
          <Input placeholder='Type a category..' size='md'  w='full'  rounded='10px' />

            </Box> 
            </Box>
            <Box  w="full" borderColor={"gray.200"}  px={2} pb={4} rounded='10px'>
          <Text align='left' position='relative' w='full' pb={2} color={'teal.500'} fontSize='sm'>
             LOCATION
            </Text>
          <Box justifyContent='left' display='flex' w='full'>
          <Input placeholder='Type a name to your product' size='md'  w='full'  rounded='10px' />
            </Box>  
            </Box>

            <Button colorScheme='teal' w={'full'}  rounded='full'>Add a product</Button>
        </VStack>
        
      </Box>
      
    </Layout>
    </>
  ) 

export default AddProduct;
