import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";


import { useUser } from "../hooks/useUser";

export const LogInForm = () => {
  const { onGoogleLogIn } = useUser();
  const { onLogIn } = useUser();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogIn(formValues.email, formValues.password);
  };

  return (
    <Box rounded={"lg"} boxShadow={"lg"} p={6} bg='white'>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
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
            Log in
          </Button>
          <Button
                type='submit'
                onClick={onGoogleLogIn}
                bg={"white.400"}
                color={"black"}
                border={"1px solid black"}
                margin={"auto"}
                _hover={{
                  bg: "white.500",
                }}  
              >
                Sign in with Google
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
