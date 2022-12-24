import {
  Layout,
  PageTitle,
  Recomm1,
  Recomm2,
  Recomm3,
  Recomm4,
} from "components";

export default function Home() {
  return (
    <Layout title='TradeIt'>
      <PageTitle>Recommended</PageTitle>
      <Recomm1 />
      <Recomm2 />
      <Recomm3 />
      <Recomm4 />
    </Layout>
  );
}
