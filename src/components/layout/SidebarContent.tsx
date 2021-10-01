import { Box, BoxProps, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { ReactChild, ReactChildren } from "react";
import { MdHome } from "react-icons/md";

interface SidebarContentProps extends BoxProps {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const SidebarContent = ({ children, ...props }: SidebarContentProps) => (
  <Box
    as="nav"
    pos="fixed"
    top="0"
    left="0"
    zIndex="sticky"
    h="full"
    pb="10"
    overflowX="hidden"
    overflowY="auto"
    bg={useColorModeValue("blue.200", "blue.700")}
    borderColor="blackAlpha.50"
    borderRightWidth="1px"
    w="60"
    {...props}
  >
    <Link href="/" passHref>
      <Flex px="4" py="5" align="center" cursor="pointer">
        <Icon fontSize="2xl" as={MdHome} />
        <Text fontSize="2xl" ml="2" color={useColorModeValue("black", "white")} fontWeight="semibold">
          App Name
        </Text>
      </Flex>
    </Link>
    <Flex direction="column" as="nav" fontSize="sm" aria-label="Main Navigation">
      {children}
    </Flex>
  </Box>
);

export default SidebarContent;
