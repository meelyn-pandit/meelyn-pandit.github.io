import { HStack, VStack, Link, Button } from '@chakra-ui/react'

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects"},
  { name: "Contact", href: "/contact" },
];

export default function MenuLinks({ isMobile = false}) {
  const LinkComponent = isMobile ? VStack : HStack

  return (
    <LinkComponent gap={isMobile ? 4 : 8} align="center">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          fontWeight="medium"
          color="blue.600"
          _hover={{
            color: "blue.500",
            textDecoration: "underline",
          }}
          transition="color 0.2s ease"
        >
          {link.name}
        </Link>
      ))}

      <Button
        bg="blue.600"
        color="white"
        size="sm"
        borderRadius="full"
        px={6}
        _hover={{
          transform: "translateY(-2px)",
          shadow: "lg",
        }}
        transition="all 0.2s ease"
      >
        Get Started
      </Button>
    </LinkComponent>
  )
}