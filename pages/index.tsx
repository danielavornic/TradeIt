import { Flex, Heading, Stack } from "@chakra-ui/react";
import { Layout, SignupForm } from "../components";

export default function Home() {
  return (
    <Layout title='TradeIt - Login' hasNavbar={false}>
      <Flex
        minH={"100vh"}
        minW='32'
        align={"center"}
        justify={"center"}
        bg='gray.50'
      >
        <Stack spacing={8} mx={"auto"} maxW={"xl"} mt='-100px' px={4}>
          {/* <Image src='logo512.png' width={100} height={100} alt='logo' /> */}
          <Heading fontSize={"4xl"} textAlign='center'>
            Sign up to TradeIt
          </Heading>
          <SignupForm />
        </Stack>
      </Flex>
    </Layout>
  );
}
