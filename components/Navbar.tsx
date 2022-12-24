import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
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
  Image,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { SearchIcon, BellIcon } from "@chakra-ui/icons";
import { useUser } from "hooks";
import { categories } from "api";

export const Navbar = () => {
  const { data } = useQuery("categories", categories.getList);
  const { user, onLogOut } = useUser();
  const router = useRouter();
  const type = router.query.type || "";
  const [search, setSearch] = useState("");

  const handleSearch = (e: any) => {
    e.preventDefault();

    router.push({
      pathname: "/products",
      query: { type: type, query: search },
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Box px={4} pb={4} borderBottomWidth={1} borderBottomColor={"gray.200"}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        mb={2}
      >
        <HStack spacing={4} alignItems={"center"}>
          <Link href='/'>
            <IconButton
              w={10}
              variant='pointer'
              icon={<Image src='/logo2.png' />}
              backgroundColor={"teal.500"}
              aria-label={"Notifications"}
              borderRadius='10'
              padding={1}
            />
          </Link>
          <Menu>
            <MenuButton
              as={Button}
              size='sm'
              cursor={"pointer"}
              minW={0}
              mr={4}
              onClick={() =>
                router.push({
                  pathname: "/products",
                  query: { type: "swap" },
                })
              }
            >
              <Text color={type === "swap" ? "teal.500" : "gray.500"}>
                Swaps
              </Text>
            </MenuButton>
            <MenuButton
              as={Button}
              size='sm'
              cursor={"pointer"}
              minW={0}
              mr={8}
              onClick={() =>
                router.push({
                  pathname: "/products",
                  query: { type: "giveaway" },
                })
              }
            >
              <Text color={type === "giveaway" ? "teal.500" : "gray.500"}>
                Giveaways
              </Text>
            </MenuButton>
          </Menu>
        </HStack>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant='link'
              cursor={"pointer"}
              minW={0}
              mr={2}
            >
              <IconButton
                size='lg'
                variant='ghost'
                icon={<BellIcon />}
                aria-label={"Notifications"}
                rounded={"full"}
              />
            </MenuButton>
            <MenuList zIndex={4} h={"45vh"} w={"80vw"}>
              <MenuItem display='block' h={"33%"} fontSize='sm'>
                <p>
                  <b>Morcov Ion </b> has offered to trade your washing machine
                  for his <b>Zenyt Fridge</b>
                </p>
                <Flex>
                  <Button
                    colorScheme='teal'
                    w={"30vw"}
                    mt={3}
                    ml={3}
                    h='4vh'
                    fontSize='xs'
                    rounded='full'
                  >
                    Accept request
                  </Button>
                  <Button
                    colorScheme='gray'
                    w={"30vw"}
                    mt={3}
                    ml={5}
                    h='4vh'
                    fontSize='xs'
                    rounded='full'
                  >
                    Delete
                  </Button>
                </Flex>
              </MenuItem>
              <MenuDivider />
              <MenuItem as={"div"} display='block' h={"33%"} fontSize='sm'>
                <p>
                  <b>Neamțu David </b> has offered to trade your Sony Vayo for a{" "}
                  <b>coffee machine</b>
                </p>
                <Flex>
                  <Button
                    colorScheme='teal'
                    w={"30vw"}
                    mt={3}
                    ml={3}
                    h='4vh'
                    fontSize='xs'
                    rounded='full'
                  >
                    Accept request
                  </Button>
                  <Button
                    colorScheme='gray'
                    w={"30vw"}
                    mt={3}
                    ml={5}
                    h='4vh'
                    fontSize='xs'
                    rounded='full'
                  >
                    Delete
                  </Button>
                </Flex>
              </MenuItem>
              <MenuDivider />
              <MenuItem display='block' h={"33%"} fontSize='sm'>
                <p>
                  <b>Ion Suruceanu</b> has accepted your trade request with your
                  volion for his <b>microphone</b>
                </p>
                <Flex>
                  <Button
                    colorScheme='teal'
                    w={"30vw"}
                    mt={4}
                    ml={"auto"}
                    mr={"auto"}
                    h='4vh'
                    fontSize='xs'
                    rounded='full'
                  >
                    Contact user
                  </Button>
                </Flex>
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              <Avatar
                size='sm'
                name={user?.name || "User"}
                bg='gray.500'
                color='white'
              />
            </MenuButton>
            <MenuList zIndex={4}>
              <MenuItem fontSize='sm'>View Profile</MenuItem>
              <MenuItem fontSize='sm'>Trades</MenuItem>
              <MenuItem fontSize='sm'>My Products</MenuItem>
              <MenuItem fontSize='sm'>Wishlist</MenuItem>
              <MenuItem fontSize='sm'>Messages</MenuItem>
              <MenuItem fontSize='sm'>Settings</MenuItem>
              <MenuDivider />
              <MenuItem fontSize='sm' onClick={onLogOut}>
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      <VStack w='full' spacing={2}>
        <form onSubmit={handleSearch} style={{ width: "100%" }}>
          <InputGroup w='full' size='sm'>
            <Input
              placeholder='Search for anything'
              w='full'
              rounded='full'
              onChange={handleChange}
              borderColor='teal.500'
            />
            <InputRightElement onClick={handleSearch}>
              <SearchIcon color='teal.500' />
            </InputRightElement>
          </InputGroup>
        </form>
        <Select
          placeholder='Browse by category'
          borderColor='teal.500'
          w='full'
          rounded='full'
          size='sm'
          onChange={(e: any) =>
            router.push({
              pathname: "/products",
              query: { type: router.query?.type, category: e.target.value },
            })
          }
        >
          {data?.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
      </VStack>
    </Box>
  );
};
