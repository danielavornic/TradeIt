import { useQuery } from "react-query";

import { Layout } from "../components";
import { products } from "../api";

export default function Home() {
  const { data } = useQuery("products", products.getList);

  return <Layout title='TradeIt - Login'>hello</Layout>;
}
