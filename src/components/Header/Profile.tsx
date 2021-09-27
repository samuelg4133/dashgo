import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Samuel Gomes</Text>
          <Text color="gray.300" fontSize="small">
            leosgv.sv@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Samuel Gomes" />
    </Flex>
  );
}
