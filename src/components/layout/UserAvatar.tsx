import { Avatar, IconButton, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { MdPersonOutline } from "react-icons/md";

const UserAvatar = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <>
      {!session && (
        <IconButton
          size="md"
          aria-label="sign-in button"
          icon={<MdPersonOutline />}
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
        />
      )}
      {session && (
        <Menu>
          <Avatar
            as={MenuButton}
            ml="4"
            size="md"
            name={session.user?.name || "Avatar"}
            src={session.user?.image || "https://avatars.githubusercontent.com/u/30869823?v=4"}
            cursor="pointer"
          />
          <MenuList>
            <MenuGroup title="Profile">
              <MenuItem>My Account</MenuItem>
              <MenuItem
                aria-label="sign-out button"
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign Out
              </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help">
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      )}
    </>
  );
};

export default UserAvatar;
