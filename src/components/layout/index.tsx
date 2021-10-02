import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  useDisclosure
} from "@chakra-ui/react";
import { ReactChild, ReactNode } from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import { MdHome, MdSecurity, MdSettings } from "react-icons/md";

import NavItem, { NavItemProps } from "./NavItem";
import SidebarContent from "./SidebarContent";
import ThemeToggle from "./ThemeToggle";
import UserAvatar from "./UserAvatar";

type LayoutProps = {
  children: ReactNode;
};

const navItemPropsList: NavItemProps[] = [
  {
    icon: MdHome,
    children: "Home",
    href: "/"
  },
  {
    icon: MdSecurity,
    children: "Protected",
    href: "/protected"
  },
  {
    icon: MdSettings,
    children: "404"
  }
];

const Layout = ({ children }: LayoutProps) => {
  const sidebar = useDisclosure();
  const NavItems = (): ReactChild[] => {
    return navItemPropsList.map((n, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <NavItem key={i} icon={n.icon} href={n.href}>
        {n.children}
      </NavItem>
    ));
  };
  return (
    <Box as="section" bg={useColorModeValue("blue.50", "blue.900")} minH="100vh">
      <SidebarContent display={{ base: "none", md: "unset" }}>{NavItems()}</SidebarContent>
      <Drawer isOpen={sidebar.isOpen} onClose={sidebar.onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none">
            {NavItems()}
          </SidebarContent>
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          justify="space-between"
          w="full"
          px="4"
          bg={useColorModeValue("blue.100", "blue.800")}
          borderBottomWidth="1px"
          borderColor="blackAlpha.300"
          h="14"
        >
          <IconButton
            aria-label="Menu"
            display={{ base: "inline-flex", md: "none" }}
            onClick={sidebar.onOpen}
            icon={<FiMenu />}
            size="sm"
          />
          <InputGroup w="96" display={{ base: "none", md: "flex" }}>
            <InputLeftElement color="gray.500">
              <FiSearch />
            </InputLeftElement>
            <Input placeholder="Search for something..." />
          </InputGroup>

          <Flex align="center" gridGap={4}>
            <ThemeToggle />
            <UserAvatar />
          </Flex>
        </Flex>

        <Box as="main" p="4">
          {/* Main content here */}
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
