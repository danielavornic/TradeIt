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
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { SearchIcon, BellIcon } from "@chakra-ui/icons";

import { useUser } from "hooks";
import { categories } from "api";

export const Navbar = () => {
  const { data } = useQuery("categories", categories.getList);
  const { user, onLogOut } = useUser();
  const router = useRouter();
  const type = router.query.type || "swap";
  const [search, setSearch] = useState("");

  const handleSearch = (e: any) => {
    e.preventDefault();

    router.push({
      pathname: "/products",
      query: { type: type, query: search },
    });
    console.log(search);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Box
      px={4}
      pb={4}
      mb={8}
      borderBottomWidth={1}
      borderBottomColor={"gray.200"}
    >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        mb={2}
      >
        <HStack spacing={4} alignItems={"center"}>
          <Link href='/'>
            <Avatar
              size='sm'
              name='TradeIt'
              bg='teal.500'
              color='white'
              rounded='md'
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
            />
            <InputRightElement onClick={handleSearch}>
              <SearchIcon />
            </InputRightElement>
          </InputGroup>
        </form>
        <Select
          placeholder='Browse by category'
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
