import { Icon, Link as ChakraLink, LinkProps, Text } from "@chakra-ui/react";
import React, { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends LinkProps {
  icon: ElementType;
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ icon, children, href, ...rest }) => {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
};

export { NavLink };
