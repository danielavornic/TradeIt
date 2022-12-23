import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
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
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { SearchIcon, BellIcon } from "@chakra-ui/icons";

import { useUser } from "../hooks";
import { categories } from "../api";

export const Navbar = () => {
  const { data } = useQuery("categories", categories.getList);
  const { user, onLogOut } = useUser();

  return (
    <>
      <Box px={4} pb={4} borderBottomWidth={1} borderBottomColor={"gray.200"}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          mb={2}
        >
          <HStack spacing={4} alignItems={"center"}>
            <Avatar
              size='sm'
              name='TradeIt'
              bg='teal.500'
              color='white'
              rounded='md'
            />
            <Menu>
              <MenuButton
                as={Button}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
                mr={4}
              >
                <Link href='/products?type=swaps'>Swaps</Link>
              </MenuButton>
              <MenuButton
                as={Button}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
                mr={8}
              >
                <Link href='/products?type=giveaways'>Giveaways</Link>
              </MenuButton>
            </Menu>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
                mr={4}
              >
                <IconButton
                  size='sm'
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
          <InputGroup w='full' size='sm'>
            <Input placeholder='Search for anything' w='full' rounded='full' />
            <InputRightElement>
              <SearchIcon />
            </InputRightElement>
          </InputGroup>
          <Select
            placeholder='Browse by category'
            w='full'
            rounded='full'
            size='sm'
          >
            {data?.map((category) => (
              <option key={category.id} value={category.id}>
                {category.id}
              </option>
            ))}
          </Select>
        </VStack>
      </Box>
    </>
  );
};
