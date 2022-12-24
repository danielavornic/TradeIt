import { useMemo } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { Box, Text } from "@chakra-ui/react";

import { products } from "api";
import { Layout, PageTitle, ProductCard } from "components";

const Products = () => {
  const router = useRouter();
  const type = router.query.type || "swap";
  const category = router.query.category;
  const searchQuery = router.query.query as string;
  const { data } = useQuery("products", products.getList);

  const filteredProducts = useMemo(
    () =>
      data
        ? data
            ?.filter((product) => product?.type === type)
            ?.filter((product) => product?.category === category || !category)
            ?.filter((product) => {
              return (
                product?.name
                  ?.toLowerCase()
                  .includes(searchQuery?.toLowerCase()) || !!!searchQuery
              );
            })
        : [],
    [data, type, category, searchQuery]
  );

  return (
    <Layout title='TradeIt - Products'>
      <PageTitle>
        Products
        {type && ` for ${type}s`}
      </PageTitle>

      <div>
        {filteredProducts?.length ? (
          filteredProducts?.map((product) => (
            <Box key={product.id} mb={8}>
              <ProductCard product={product} />
            </Box>
          ))
        ) : (
          <Text textAlign='center'>No products found</Text>
        )}
      </div>
    </Layout>
  );
};

export default Products;
