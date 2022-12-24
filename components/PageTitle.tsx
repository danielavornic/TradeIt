import { PropsWithChildren } from "react";
import { Text } from "@chakra-ui/react";

export const PageTitle = ({ children }: PropsWithChildren) => {
  return (
    <Text fontSize='2xl' fontWeight='bold' mb={4} as='h1'>
      {children}
    </Text>
  );
};
