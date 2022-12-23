import { useContext, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useUser } from "../hooks";

export const SignupForm = () => {
  const { onSignUp } = useUser();

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formValues);

    onSignUp(formValues.email, formValues.password);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });

  return (
    <Box rounded={"lg"} boxShadow={"lg"} p={6} bg='white'>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id='name'>
            <FormLabel>Name</FormLabel>
            <Input type='text' name='name' onChange={handleChange} />
          </FormControl>
          <FormControl id='email'>
            <FormLabel>Email address</FormLabel>
            <Input type='email' name='email' onChange={handleChange} />
          </FormControl>
          <FormControl id='password'>
            <FormLabel>Password</FormLabel>
            <Input type='password' name='password' onChange={handleChange} />
          </FormControl>
          <Button
            type='submit'
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
          >
            Sign up
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
