import { useState } from "react";
import { useRouter } from "next/router";
import {
  Input,
  Box,
  VStack,
  Text,
  Button,
  HStack,
  Textarea,
  Radio,
  RadioGroup,
  Stack,
  Image,
  Select,
  useToast,
} from "@chakra-ui/react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { QueryCache, useMutation, useQuery, useQueryClient } from "react-query";

import { storage } from "../../firebase";
import { categories, products } from "api";
import { Layout, PageTitle } from "components";
import { createSlug } from "utils";

const FALLBACK_IMAGE = "https://rental.brmg.md/images/fallback.png";

const AddProduct = () => {
  const toast = useToast();
  const queryClient = useQueryClient();
  const router = useRouter();
  const [type, setType] = useState("swap");
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState(FALLBACK_IMAGE);
  const [category, setCategory] = useState();
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    image: "",
  });
  const slug = createSlug(formValues.name);

  const { data } = useQuery("categories", categories.getList);
  const { mutate } = useMutation(products.add, {
    onSuccess: () => {
      router.push(`/products/${slug}`);
      toastNotification("Product added successfully", "success");
      queryClient.invalidateQueries("products");
    },
  });

  const toastNotification = (title: string, status: "success" | "error") =>
    toast({
      title,
      status,
      duration: 4000,
      isClosable: true,
      position: "top-right",
    });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const { name, description } = formValues;

    mutate({
      name,
      description,
      category,
      type: type as "swap" | "giveaway",
      image: imageUrl,
      userId: "1",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      slug,
    });
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSetCategory = (e: any) => {
    setCategory(e.target.value);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const path = `images/${type}/${file.name}`;
      const imgRef = ref(storage, path);
      await uploadBytes(imgRef, file);
      const downloadUrl = await getDownloadURL(imgRef);
      setImageUrl(downloadUrl);
    }
  };

  return (
    <>
      <Layout title='TradeIt - Add product'>
        <PageTitle>Add product</PageTitle>
        <Box pb={5} mb={10}>
          <form onSubmit={handleSubmit} id='form'>
            <VStack w='full' spacing={2}>
              <Box
                w='full'
                borderColor={"gray.200"}
                pb={4}
                pt={4}
                rounded='10px'
              >
                <Text
                  align='left'
                  position='relative'
                  w='full'
                  pb={2}
                  color={"teal.500"}
                  fontSize='sm'
                >
                  NAME
                </Text>
                <Box justifyContent='left' display='flex' w='full'>
                  <Input
                    placeholder='Type a name...'
                    size='md'
                    w='full'
                    rounded='10px'
                    name='name'
                    onChange={handleChange}
                  />
                </Box>
              </Box>
              <Box w='full' pb={5} rounded='10px'>
                <Text
                  align='left'
                  position='relative'
                  w='full'
                  pb={2}
                  color={"teal.500"}
                  fontSize='sm'
                >
                  IMAGE
                </Text>
                <Button as='label' htmlFor='file-input' size='sm'>
                  Upload image
                </Button>
                <Image src={imageUrl} alt='product' w='full' mt={4} />
                <input
                  type='file'
                  accept='image/*'
                  id='file-input'
                  className='file-input'
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
              </Box>
              <Box w='full' borderColor={"gray.200"} pb={4} rounded='10px'>
                <Text
                  align='left'
                  position='relative'
                  w='full'
                  color={"teal.500"}
                  fontSize='sm'
                  pb={2}
                >
                  BARTER TYPE
                </Text>
                <Box justifyContent='left' display='flex' w='full'>
                  <HStack direction='row' w='full'>
                    <RadioGroup onChange={setType} value={type}>
                      <Stack direction='row'>
                        <Radio value='swap'>Swap</Radio>
                        <Radio value='giveaway'>Giveaway</Radio>
                      </Stack>
                    </RadioGroup>
                  </HStack>
                </Box>
              </Box>
              <Box w='full' borderColor={"gray.200"} pb={4} rounded='10px'>
                <Text
                  align='left'
                  position='relative'
                  w='full'
                  pb={2}
                  color={"teal.500"}
                  fontSize='sm'
                >
                  CATEGORIES
                </Text>
                <Select
                  placeholder='Select category'
                  w='full'
                  onChange={handleSetCategory}
                >
                  {data?.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </Select>
              </Box>

              <Box w='full' borderColor={"gray.200"} pb={4} rounded='10px'>
                <Text
                  align='left'
                  position='relative'
                  w='full'
                  pb={2}
                  color={"teal.500"}
                  fontSize='sm'
                >
                  DESCRIPTION
                </Text>
                <Box justifyContent='left' display='flex' w='full'>
                  <Textarea
                    placeholder='Type a description...'
                    rounded='10px'
                    name='description'
                    onChange={handleChange}
                  />
                </Box>
              </Box>

              <Button
                colorScheme='teal'
                w={"full"}
                rounded='full'
                form='form'
                type='submit'
              >
                Add product
              </Button>
            </VStack>
          </form>
        </Box>
      </Layout>
    </>
  );
};

export default AddProduct;
