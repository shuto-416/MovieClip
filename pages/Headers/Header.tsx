import {
    Box,
    Stack,
    Button,
    Flex,
    Text,
    Avatar,
    Collapse,
    IconButton,
    useDisclosure,
    useColorMode,
    useColorModeValue,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Center,
  } from "@chakra-ui/react"
import { 
    HamburgerIcon,
    CloseIcon,
    MoonIcon,
    SunIcon,
 } from "@chakra-ui/icons"

 import DesktopNav from "./DesktopNav"
 import MobileNav from "./MobileNav"
 import selfImage from "../../public/icon.jpg"

const Header = () => {
    const { isOpen, onToggle } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();

    return(
        // all in Box
        <Box> 
            <Flex // header container without mobile
                bg = {useColorModeValue('white', 'gray.800')}
                color = {useColorModeValue('gray.600', 'white')}
                minH = {'60px'} // minimum height
                // base -> 全体templete適用?みたいな
                py = {{ base: 2 }} // padding top & bottom
                px = {{ base: 4 }} // padding left & right
                borderBottom = {1} // border bottom
                borderStyle={'solid'}
                borderColor = {useColorModeValue('gray.200', 'gray.900')} // border color
                align = {'center'}
            >
                {/* HumburgerIcon & closeIcon when the mobile size */}
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

                {/* title Flex component*/}
                <Flex flex = {{ base: 1 }} justify = {{ base: 'center', md: 'start' }} >
                    <Text
                        textAlign = {{ base: 'center', md: 'left' }} // ウィンドウサイズがmd以下ならcenter, md以上ならleft
                        fontWeight = {'bold'}
                        fontSize = {{ base: 'lg', md: 'xl' }}
                        color={useColorModeValue('gray.800', 'white')}
                    >
                        MOVIECLIP
                    </Text>

                    <Flex display = {{ base:'none', md:'flex' }} ml = {10} >
                        <DesktopNav />
                    </Flex>
                </Flex>

                <Stack
                    flex = {{ base: 1, md: 0 }}
                    justify = {'flex-end'}
                    direction = {'row'}
                    spacing = {6}
                >
                    <Button onClick={toggleColorMode}>
                        {colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
                    </Button>

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

                    <Menu>
                        <MenuButton
                            as = {'button'}
                            rounded = {'full'}
                            cursor = {'pointer'}
                            minW = {'0'}
                        >
                            <Avatar
                                size = {'sm'}
                                src = {selfImage}
                            />
                        </MenuButton>

                        <MenuList alignItems = {'center'}>
                            <br />
                            <Center>
                                <Avatar
                                    size = {'2xl'}
                                    src = "../../public/icon.jpg"
                                />
                            </Center>
                            <br />
                            <Center>
                                <p>Hamachan dao</p>
                            </Center>
                            <MenuDivider />
                            <MenuItem>GitHub</MenuItem>
                            <MenuItem>Twitter</MenuItem>
                            <MenuItem>instagram</MenuItem>
                        </MenuList>
                    </Menu>
                </Stack>
 
            </Flex>
            <Collapse in = {isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    )
}

export default Header;