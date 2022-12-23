import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Layout, LogInForm, SignupForm } from "../components";

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
          <Link href={"/login"}>
            <Text fontSize={"1xl"} color={"blue"} textAlign='center'>
              Already a member? Log In.
            </Text>
          </Link>
          
          
        </Stack>  
      </Flex>
    </Layout>
  );
}
