import { useMemo } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { Text } from "@chakra-ui/react";

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
        ?.filter((product) => product?.type === type)
        .filter((product) => product?.category === category || !category)
        .filter((product) => {
          console.log(product?.name?.toLowerCase(), searchQuery?.toLowerCase());

          return (
            product?.name?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
            !!!searchQuery
          );
        }),
    [data, type, category, searchQuery]
  );

  return (
    <Layout title='TradeIt - Products'>
      <PageTitle>Products</PageTitle>

      <div>
        {filteredProducts?.length ? (
          filteredProducts?.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <Text textAlign='center'>No products found</Text>
        )}
      </div>
    </Layout>
  );
};

export default Products;
