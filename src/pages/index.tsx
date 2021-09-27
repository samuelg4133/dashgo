import { Button, Flex, Stack } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../components/Form/Input";

type SignInFormData = {
  email: string;
  password: string;
};

export default function SignIn(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleSignIn: SubmitHandler<SignInFormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      onSubmit={handleSubmit(handleSignIn)}
    >
      <Head>
        <title>Create Next App</title>
      </Head>
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing={4}>
          <Input
            name="email"
            label="Email"
            type="email"
            error={errors.email}
            {...register("email", {
              required: true,
            })}
          />
          <Input
            name="password"
            label="Senha"
            type="password"
            error={errors.password}
            {...register("password", {
              required: true,
              minLength: 3,
            })}
          />
        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
