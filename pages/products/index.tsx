import { useMemo } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

import { products } from "api";
import { Layout } from "components";

const Products = () => {
  const router = useRouter();
  const type = router.query.type || "swap";
  const category = router.query.category;
  const { data } = useQuery("products", products.getList);
  const productsByType = useMemo(
    () => data?.filter((product) => product?.type === type),
    [data, type]
  );
  const filteredProducts = !!category
    ? productsByType?.filter((product) => product?.category === category)
    : productsByType;

  return <Layout title='TradeIt - Products'>Products</Layout>;
};

export default Products;
