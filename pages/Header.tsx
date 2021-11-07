import {
    Box,
    Stack,
    Heading,
    Flex,
    Text,
    Button,
    useDisclosure
  } from "@chakra-ui/react"
  import { HamburgerIcon } from "@chakra-ui/icons"

const Header = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleToggle = () => (isOpen ? onClose() : onOpen());

    return(
        <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        bg="#319795"
        color="black"
        h="50px"
        >
            <Flex align="center" m={5}>
                <Heading as="h1" size="lg" letterSpacing={'tighter'} onClick={handleToggle}>
                    MOVIECLIP
                </Heading>
            </Flex>

            <Box>
                <HamburgerIcon/>
            </Box>

            <Stack direction={["row"]} spacing="10px">
                <Text>Docs</Text>
                <Text>Examples</Text>
                <Text>Blog</Text>
            </Stack>

        </Flex>
    )
}

export default Header;