import { HStack, VStack, Link, Button } from '@chakra-ui/react'

const links = [
  // { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
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

    // <header className="bg-gray-800 md:sticky top-0 z-10">
    //   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    //     {/* <a className="title-font font-medium text-white mb-4 md:mb-0"> */}
    //       <a href="#about" className="ml-3 text-xl">
    //         Home
    //       </a>
    //     {/* </a> */}
    //     <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
    //       <a href="#projects" className="mr-5 hover:text-white">
    //         Published Research
    //       </a>
    //       <a href="#skills" className="mr-5 hover:text-white">
    //         Skills
    //       </a>
    //       <a href="#testimonials" className="mr-5 hover:text-white">
    //         Research Interests
    //       </a>
    //     </nav>
    //     <a
    //       href="#contact"
    //       className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
    //       Contact Me
    //       <ArrowRightSquareFill className="w-4 h-4 ml-1" />
    //     </a>
    //   </div>
    // </header>
  )
}