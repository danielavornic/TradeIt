import { AddIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { Box, Wrap, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

export const PlusButton = () => {
  const router = useRouter();
  const isOnAddPage = router.pathname === "/products/add";

  if (isOnAddPage) {
    return null;
  }

  return (
    <Box
      display='flex'
      alignItems='right'
      justifyContent='right'
      py={2}
      mr={3}
      bgRepeat='no-repeat'
      onClick={() => router.push("/products/add")}
    >
      <IconButton
        boxShadow='lg'
        rounded='full'
        size='lg'
        aria-label='Call Sage'
        position='fixed'
        bottom={6}
        right={4}
        fontSize='20px'
        icon={<AddIcon />}
        colorScheme='teal'
      />
    </Box>
  );
};
