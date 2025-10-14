import {
  useDisclosure,
  Drawer,
  Button,
  Portal,
  CloseButton,
  Icon,
//   Menu
} from "@chakra-ui/react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { BsList } from "react-icons/bs";
const MobileDrawer = () => {
  const { open, onToggle } = useDisclosure();

  return (
    <Drawer.Root open={open} onOpenChange={onToggle} size="full">
      <Drawer.Trigger asChild>
        <Button variant="outline" size="sm">
          <Icon color="blue.600">
            {/* <Menu /> */}
            {/* <div>
                <i 
                    className="bi bi-list"
                    style={{fill: "black"}}></i>
            </div> */}
            <BsList />
          </Icon>
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>
                <Logo />
              </Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Navbar isMobile />
            </Drawer.Body>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="md" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default MobileDrawer;