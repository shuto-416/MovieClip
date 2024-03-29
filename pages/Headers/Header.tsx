import {
    Box,
    Stack,
    Button,
    Flex,
    Link,
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

import { 
    BsGithub,
    BsTwitter,
    BsInstagram,
} from "react-icons/bs"
import Head from "next/head"
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"

const Header = () => {
    const { isOpen, onToggle } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();

    return(
        <div>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"/>
            </Head>
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
                    <Link href = '/' _hover={{ textDecoration: 'none' }}>
                    <Text
                        textAlign = {{ base: 'center', md: 'left' }} // ウィンドウサイズがmd以下ならcenter, md以上ならleft
                        fontWeight = {'bold'}
                        fontFamily={'Anton'}
                        fontSize = {{ base: 'xl', md: '3xl' }}
                        color={useColorModeValue('gray.800', 'white')}
                    >
                        MOVIECLIP
                    </Text>
                    </Link>

                    <Flex display = {{ base:'none', md:'flex' }} ml = {10} mt = {2.5}>
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

                    <Link href={'/edit'} _hover={{ textDecoration: 'none' }}>
                        <Button
                            display={{ base: 'none', md: 'inline-flex' }}
                            fontSize = {'sm'}
                            fontWeight = {600}
                            color = {'white'} // font color
                            bgGradient={'linear(to-r, red.400,pink.400)'}
                            _hover = {{ bg: 'linear(to-r, red.400,pink.400)' }} // hover action
                        >
                            POST
                        </Button>
                    </Link>

                    <Menu>
                        <MenuButton
                            as = {'button'}
                            rounded = {'full'}
                            cursor = {'pointer'}
                            minW = {'0'}
                        >
                            <Avatar
                                size = {'sm'}
                                src = {"selfImage"}
                            />
                        </MenuButton>

                        <MenuList alignItems = {'center'}>
                            <br />
                            <Center>
                                <Avatar
                                    size = {'2xl'}
                                    src = {"../../public/icon.jpg"}
                                />
                            </Center>
                            <br />
                            <Center>
                                <p>Hamachan dayo</p>
                            </Center>
                            <MenuDivider />
                            <Link href = {'https://github.com/shuto-416'} _hover={{ textDecoration: 'none' }}>
                                <MenuItem>
                                    <Box as={BsGithub} size={30} pr={2}/>GitHub
                                </MenuItem>
                            </Link>
                            <Link href = {'https://twitter.com/shuto_416'} _hover={{ textDecoration: 'none' }}>
                                <MenuItem>
                                    <Box as={BsTwitter} size={30} pr={2}/>Twitter
                                </MenuItem>
                            </Link>
                            <Link href={'https://www.instagram.com/s_hamasan/'} _hover={{ textDecoration: 'none' }}>
                                <MenuItem>
                                    <Box as={BsInstagram} size={30} pr={2}/>instagram
                                </MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                </Stack>
 
            </Flex>
            <Collapse in = {isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
        </div>
    )
}

export default Header;