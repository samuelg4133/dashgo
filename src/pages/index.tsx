import { Button, Flex, Stack } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { Input } from "../components/Form/Input";

export default function SignIn(): JSX.Element {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
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
          <Input name="email" label="Email" type="email" />
          <Input name="password" label="Senha" type="password" />
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
