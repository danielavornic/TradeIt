import { useMutation } from "react-query";

import { products } from "api";
import { createSlug } from "utils";

const AddProduct = () => {
  const { mutate } = useMutation(products.add);

  return <div>AddProduct</div>;
};

export default AddProduct;
