
import MenuLinks from './MenuLinks'
import Logo from './Logo'
import MobileDrawer from './MobileDrawer'
import { Flex, Box } from "@chakra-ui/react";
import '../../App.css'


export default function Navbar() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      gap={{ base: 8, lg: 16 }}
      px={{ base: 6, lg: 12 }}
      py={3}
      maxW={{ base: "full", xl: "1440px"}}
      mx="auto"
    >
      <Logo />
      {/* Desktop Menu */}
      <Box display={{ base: "none", md: "block" }}>
        <MenuLinks />
      </Box>

      {/* Mobile Drawer */}
      <Box display={{ base: "block", md: "none" }}>
        <MobileDrawer />
      </Box>
    </Flex>
  );
}