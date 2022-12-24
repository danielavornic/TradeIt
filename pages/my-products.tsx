import { useMemo, useState } from "react";
import { useRouter } from "next/router";
import { Text, Flex, Button, Box, useToast } from "@chakra-ui/react";
import { useMutation, useQuery, useQueryClient } from "react-query";

import { Layout, PageTitle, ProductListItem } from "components";
import { mySwaps, product } from "api";

const MyProducts = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { swapProduct } = router.query;

  const [selectedProducts, setSelectedProducts] = useState<any>();
  const toast = useToast();
  const toastNotification = (title: string, status: "success" | "error") =>
    toast({
      title,
      status,
      duration: 4000,
      isClosable: true,
      position: "top-right",
    });

  const { data } = useQuery("products", product.getList);
  const filteredProducts = useMemo(
    () => (data ? data?.filter((product) => product?.userId === "1") : []),
    [data]
  );
  const { mutate: addSwap } = useMutation(mySwaps.add, {
    onSuccess: () => {
      toastNotification("Swap request sent successfully", "success");
      router.push(`/products/${swapProduct}`);
      queryClient.invalidateQueries("swaps");
    },
  });

  return (
    <Layout title='TradeIt - Choose Products'>
      <PageTitle>Choose Products</PageTitle>

      <Flex direction='column'>
        {filteredProducts?.length ? (
          filteredProducts?.map((product) => (
            <Box key={product.id} mb={4}>
              <ProductListItem
                product={product}
                onSelect={setSelectedProducts}
              />
            </Box>
          ))
        ) : (
          <Text textAlign='center'>No products found</Text>
        )}
      </Flex>

      <Button
        width='100%'
        mt={4}
        rounded='full'
        colorScheme='teal'
        disabled={!selectedProducts}
        onClick={() => addSwap({ targetProduct: swapProduct })}
      >
        Swap
      </Button>
    </Layout>
  );
};

export default MyProducts;
