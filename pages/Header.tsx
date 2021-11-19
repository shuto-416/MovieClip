import {
    Box,
    Stack,
    Heading,
    Flex,
    Text,
    Collapse,
    Button,
    IconButton,
    useDisclosure,
    useColorModeValue,
    useBreakpointValue,
  } from "@chakra-ui/react"
import { 
    HamburgerIcon,
    CloseIcon,
 } from "@chakra-ui/icons"

const Header = () => {
    const { isOpen, onToggle } = useDisclosure();

    return(
        <Box>
            <Flex
                bg = {useColorModeValue('white', 'grey.800')}
                color = {useColorModeValue('grey.600', 'white')}
                minH = {'60px'} // minimum height
                // base -> 全体templete適用?みたいな
                py = {{ base: 2 }} // padding top & bottom
                px = {{ base: 4 }} // padding left & right
                borderBottom = {1} // border bottom
                borderColor = {useColorModeValue('grey.200', 'grey.900')} // border color
                align = {'center'}
            >
                <Flex
                    flex = {{ base: 1, md: 'auto' }} // md: meddium
                    ml = {{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}
                >
                    <IconButton
                        onClick = {onToggle}
                        icon = { isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} /> }
                        variant = 'ghost'
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>

                <Flex flex = {{ base: 1 }} justify = {{ lg: 'center', md: 'start' }} >
                    <Text
                        textAlign = {useBreakpointValue({ base: 'center', md: 'left' })} // ウィンドウサイズがmd以下ならcenter, md以上ならleft
                        fontfamily = {'heading'}
                        color={useColorModeValue('gray.800', 'white')}
                    >
                        MOVIECLIP
                    </Text>

                    {/* <Flex display = {{base:'none', md:'flex'}} ml = {10} >
                        <DesktopNav />
                    </Flex> */}
                </Flex>

                <Stack
                    flex = {{ base: 1, md: 0 }}
                    justify = {'flex-end'}
                    direction = {'row'}
                    spacing = {6}
                >
                    <Button
                        as = {'a'}
                        fontSize = {'sm'} // sm: small
                        fontWeight = {400}
                        variant = {'link'}
                        href = {'#'}
                    >
                        Sign In
                    </Button>

                    <Button
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontSize = {'sm'}
                        fontWeight = {600}
                        color = {'white'} // font color
                        bg = {'pink.400'} // back ground color
                        href = {'#'}
                        _hover = {{ bg: 'pink.300' }} // hover action
                    >
                        Sign Up
                    </Button>
                </Stack>
 
            </Flex>
            {/* <Collapse in = {isOpen} animateOpacity>
                <MobileNav />
            </Collapse> */}
        </Box>
    )
}

export default Header;