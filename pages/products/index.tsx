import { useMemo } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

import { products } from "api";
import { Layout, ProductCard } from "components";
import { Text } from "@chakra-ui/react";

const Products = () => {
  const router = useRouter();
  const type = router.query.type || "swap";
  const category = router.query.category;
  const { data } = useQuery("products", products.getList);
  const filteredProducts = useMemo(
    () =>
      data
        ?.filter((product) => product?.type === type)
        .filter((product) => product?.category === category || !category),
    [data, type, category]
  );

  return (
    <Layout title='TradeIt - Products'>
      <h1>Products</h1>

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
