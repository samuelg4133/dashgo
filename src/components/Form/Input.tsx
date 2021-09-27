import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as FormInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { ForwardRefRenderFunction } from "toasted-notes/node_modules/@types/react";

interface InputProps extends ChakraInputProps {
  error?: FieldError;
  name: string;
  label?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { error = null, name, label, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <FormInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900",
        }}
        size="lg"
        ref={ref}
        {...rest}
      />
      {!!error && (
        <FormErrorMessage>O campo {label} é obrigatório</FormErrorMessage>
      )}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
