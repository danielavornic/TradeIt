import { Layout } from "components";
import { Recomm1 } from "components/Recom"
import { Recomm2 } from "components/Recom1"
import { Recomm3 } from "components/Recom2"
import { Recomm4 } from "components/Recom3"
export default function Home() {
  return <Layout title='TradeIt'>
<Recomm1/>
<Recomm2/>
<Recomm3/>
<Recomm4/>
  </Layout>;
}
