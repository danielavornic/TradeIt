import { useMemo } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

import { products } from "api";
import { Layout, ProductCard } from "components";

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
    [data, type]
  );
  // const filteredProducts = !!category
  //   ? productsByType?.filter((product) => product?.category === category)
  //   : productsByType;

  // console.log("productsByType", productsByType);

  return (
    <Layout title='TradeIt - Products'>
      <h1>Products</h1>

      <div>
        {filteredProducts?.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Products;
