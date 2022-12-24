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
      bgRepeat='no-repeat'
      mr={3}
      onClick={() => router.push("/products/add")}
    >
      <IconButton
        boxShadow='md'
        rounded='md'
        aria-label='Call Sage'
        position='fixed'
        bottom={6}
        right={4}
        fontSize='20px'
        icon={<AddIcon />}
        color='D3DEE7'
      />
    </Box>
  );
};
