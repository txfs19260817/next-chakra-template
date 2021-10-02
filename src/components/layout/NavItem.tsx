import { Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";
import { IconType } from "react-icons";

export type NavItemProps = {
  // Nav item text
  children: ReactNode;
  // Link href
  href?: string;
  // React Icon
  icon: IconType;
};

const NavItem = ({ icon, href, children }: NavItemProps) => {
  return (
    <Link href={href ?? "/404"} passHref>
      <Flex
        align="center"
        mx="2"
        px="4"
        py="3"
        rounded="md"
        cursor="pointer"
        color={useColorModeValue("blackAlpha.800", "whiteAlpha.800")}
        _hover={{
          bg: useColorModeValue("blue.300", "blue.600"),
          color: useColorModeValue("black", "white")
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
      >
        {icon && <Icon mr="2" boxSize="4" _groupHover={{ color: "gray.800" }} as={icon} />}
        {children}
      </Flex>
    </Link>
  );
};

export default NavItem;
